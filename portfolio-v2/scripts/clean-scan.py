#!/usr/bin/env python3
"""Clean a raw phone face scan into a site-ready face.glb.

Takes a GLB from a scanning app (Polycam/Luma/KIRI export), removes textures
and background junk, straightens the head, and writes a compact geometry-only
GLB for public/models/face.glb.

Usage:
    python3 scripts/clean-scan.py <input.glb> <output.glb> [pitch]

pitch (radians) tilts the head forward; positive = chin down. The bundled scan
needed 0.60 (captured looking ~35° up). Start with 0 and adjust by eye.

Assumptions (typical for phone scans exported via Blender):
- The GLB has one mesh, optionally under a node with a +90° X rotation.
- The face is the topmost dense cluster; background junk (chest/room) is
  separated from it by an empty vertical gap and/or sits outside the head's
  center column.
"""

import json
import math
import struct
import sys


def read_glb(path):
    with open(path, 'rb') as f:
        data = f.read()
    clen, _ = struct.unpack('<II', data[12:20])
    gltf = json.loads(data[20:20 + clen])
    off = 20 + clen
    blen, _ = struct.unpack('<II', data[off:off + 8])
    return gltf, data[off + 8:off + 8 + blen]


def read_accessor(gltf, buf, idx, fmt_char):
    acc = gltf['accessors'][idx]
    bv = gltf['bufferViews'][acc['bufferView']]
    start = bv.get('byteOffset', 0) + acc.get('byteOffset', 0)
    comps = {'VEC3': 3, 'VEC2': 2, 'SCALAR': 1}[acc['type']]
    return list(struct.unpack_from(f'<{acc["count"] * comps}{fmt_char}', buf, start)), acc


def main():
    src, dst = sys.argv[1], sys.argv[2]
    pitch = float(sys.argv[3]) if len(sys.argv) > 3 else 0.0

    gltf, buf = read_glb(src)
    prim = gltf['meshes'][0]['primitives'][0]
    pos, pacc = read_accessor(gltf, buf, prim['attributes']['POSITION'], 'f')
    nrm, _ = read_accessor(gltf, buf, prim['attributes']['NORMAL'], 'f')
    iacc = gltf['accessors'][prim['indices']]
    ifmt = {5123: 'H', 5125: 'I'}[iacc['componentType']]
    idx, _ = read_accessor(gltf, buf, prim['indices'], ifmt)
    n = pacc['count']
    print(f'input: {n} verts, {len(idx) // 3} tris')

    # Node +90° X rotation (Blender export convention), then pitch correction.
    node_rot = gltf.get('nodes', [{}])[0].get('rotation')
    has_node_rot = node_rot and abs(node_rot[0] - 0.7071) < 0.01
    ca, sa = math.cos(pitch), math.sin(pitch)

    def bake(arr):
        for i in range(n):
            x, y, z = arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2]
            if has_node_rot:
                x, y, z = x, -z, y
            y, z = ca * y - sa * z, sa * y + ca * z
            arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2] = x, y, z

    bake(pos)
    bake(nrm)

    # Face column: near the horizontal center, front half by depth.
    xs = sorted(pos[i * 3] for i in range(n))
    cx = (xs[0] + xs[-1]) / 2
    col = [i for i in range(n) if abs(pos[i * 3] - cx) <= 0.20]
    zs = sorted(pos[i * 3 + 2] for i in col)
    z_cut = zs[0] + 0.45 * (zs[-1] - zs[0])
    col = [i for i in col if pos[i * 3 + 2] >= z_cut]

    # Split at the emptiest horizontal band between face and junk below.
    ys = [pos[i * 3 + 1] for i in col]
    mny, mxy = min(ys), max(ys)
    BINS = 60
    hist = [0] * BINS
    for y in ys:
        hist[min(BINS - 1, int((y - mny) / (mxy - mny) * BINS))] += 1
    lo, hi = int(BINS * 0.10), int(BINS * 0.45)
    gap_bin = min(range(lo, hi), key=lambda b: hist[b])
    gap_y = mny + (gap_bin + 0.5) * (mxy - mny) / BINS
    print(f'split below face at y={gap_y:.3f} (band density {hist[gap_bin]})')

    keep = set(i for i in col if pos[i * 3 + 1] >= gap_y)
    ktris = [
        (idx[t], idx[t + 1], idx[t + 2])
        for t in range(0, len(idx), 3)
        if idx[t] in keep and idx[t + 1] in keep and idx[t + 2] in keep
    ]
    used = sorted(set(v for t in ktris for v in t))
    remap = {v: i for i, v in enumerate(used)}
    print(f'kept: {len(used)} verts, {len(ktris)} tris')

    # Roll-correct so the face's long axis is vertical.
    mx_ = sum(pos[v * 3] for v in used) / len(used)
    my_ = sum(pos[v * 3 + 1] for v in used) / len(used)
    sxx = syy = sxy = 0.0
    for v in used:
        dx, dy = pos[v * 3] - mx_, pos[v * 3 + 1] - my_
        sxx += dx * dx
        syy += dy * dy
        sxy += dx * dy
    theta = 0.5 * math.atan2(2 * sxy, sxx - syy)
    roll = theta if abs(theta) < math.pi / 4 else theta - math.copysign(math.pi / 2, theta)
    print(f'roll correction: {math.degrees(roll):.1f} deg')
    cr, sr = math.cos(-roll), math.sin(-roll)

    new_p, new_n = [], []
    for v in used:
        x, y, z = pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]
        x, y = cr * x - sr * y, sr * x + cr * y
        new_p += [x, y, z]
        nx, ny, nz = nrm[v * 3], nrm[v * 3 + 1], nrm[v * 3 + 2]
        nx, ny = cr * nx - sr * ny, sr * nx + cr * ny
        new_n += [nx, ny, nz]
    new_i = [remap[v] for t in ktris for v in t]

    pb = struct.pack(f'<{len(new_p)}f', *new_p)
    nb = struct.pack(f'<{len(new_n)}f', *new_n)
    ib = struct.pack(f'<{len(new_i)}I', *new_i)
    ib += b'\x00' * (-len(ib) % 4)
    bin_chunk = pb + nb + ib
    out = {
        'asset': {'version': '2.0', 'generator': 'clean-scan'},
        'scene': 0,
        'scenes': [{'nodes': [0]}],
        'nodes': [{'mesh': 0, 'name': 'FaceScan'}],
        'meshes': [{'name': 'FaceScan', 'primitives': [{'attributes': {'POSITION': 0, 'NORMAL': 1}, 'indices': 2}]}],
        'accessors': [
            {'bufferView': 0, 'componentType': 5126, 'count': len(used), 'type': 'VEC3',
             'min': [min(new_p[i::3]) for i in range(3)], 'max': [max(new_p[i::3]) for i in range(3)]},
            {'bufferView': 1, 'componentType': 5126, 'count': len(used), 'type': 'VEC3'},
            {'bufferView': 2, 'componentType': 5125, 'count': len(new_i), 'type': 'SCALAR'},
        ],
        'bufferViews': [
            {'buffer': 0, 'byteOffset': 0, 'byteLength': len(pb)},
            {'buffer': 0, 'byteOffset': len(pb), 'byteLength': len(nb)},
            {'buffer': 0, 'byteOffset': len(pb) + len(nb), 'byteLength': len(new_i) * 4},
        ],
        'buffers': [{'byteLength': len(bin_chunk)}],
    }
    js = json.dumps(out, separators=(',', ':')).encode()
    js += b' ' * (-len(js) % 4)
    glb = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(bin_chunk))
    glb += struct.pack('<II', len(js), 0x4E4F534A) + js
    glb += struct.pack('<II', len(bin_chunk), 0x004E4942) + bin_chunk
    with open(dst, 'wb') as f:
        f.write(glb)
    print(f'wrote {dst}: {len(glb)} bytes')


if __name__ == '__main__':
    main()
