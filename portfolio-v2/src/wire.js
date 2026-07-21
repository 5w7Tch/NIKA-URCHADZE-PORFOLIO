import { Delaunay } from 'd3-delaunay';

// Wireframe topology + frame extraction for the animated face.
//
// The topology (which landmarks become vertices, and the edges joining
// them) is decided ONCE from a neutral straight-ahead frame; every recorded
// frame afterwards stores only the positions of those same landmarks, so
// all frames share one mesh and can be blended at runtime.
//
// Input is always the MediaPipe landmark array (468 canonical / 478 live).

const TARGET_FILL = 160; // surface vertices on top of the forced feature rings
const HEIGHT = 1.85;

// MediaPipe FACEMESH landmark rings — these carry the likeness.
// prettier-ignore
const FEATURE_RINGS = [
  // face oval (jawline, temples, hairline)
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379,
  378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127,
  162, 21, 54, 103, 67, 109,
  // right eye
  33, 7, 163, 144, 145, 153, 154, 155, 133, 246, 161, 160, 159, 158, 157, 173,
  // left eye
  263, 249, 390, 373, 374, 380, 381, 382, 362, 466, 388, 387, 386, 385, 384, 398,
  // right brow
  46, 53, 52, 65, 55, 70, 63, 105, 66, 107,
  // left brow
  276, 283, 282, 295, 285, 300, 293, 334, 296, 336,
  // lips outer
  61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 409, 270, 269, 267, 0,
  37, 39, 40, 185,
  // lips inner
  78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 415, 310, 311, 312, 13,
  82, 81, 80, 191,
  // nose bridge, tip, base and wings
  168, 6, 197, 195, 5, 4, 1, 19, 94, 2, 98, 327, 326, 97, 129, 358,
];

// Ordered boundary rings of regions that must stay empty — no wireframe
// threads inside the eyes, nor inside the mouth when it's open. The rings
// themselves render as clean outlines.
// prettier-ignore
const HOLES = [
  // right eye
  [33, 7, 163, 144, 145, 153, 154, 155, 133, 173, 157, 158, 159, 160, 161, 246],
  // left eye
  [263, 249, 390, 373, 374, 380, 381, 382, 362, 398, 384, 385, 386, 387, 388, 466],
  // inner lips
  [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 415, 310, 311, 312, 13, 82, 81, 80, 191],
];

// Upper/lower sides of each opening hole (landmark indices; corners are
// neutral). An edge joining opposite sides would bridge the opening no
// matter how closed it is at topology time — always removed.
// prettier-ignore
const SEAM_SIDES = [
  { // right eye: upper lid vs lower lid
    a: [246, 161, 160, 159, 158, 157, 173],
    b: [7, 163, 144, 145, 153, 154, 155],
  },
  { // left eye
    a: [466, 388, 387, 386, 385, 384, 398],
    b: [249, 390, 373, 374, 380, 381, 382],
  },
  { // mouth: upper lip (inner + outer) vs lower lip (inner + outer)
    a: [415, 310, 311, 312, 13, 82, 81, 80, 191, 185, 40, 39, 37, 0, 267, 269, 270, 409],
    b: [95, 88, 178, 87, 14, 317, 402, 318, 324, 146, 91, 181, 84, 17, 314, 405, 321, 375],
  },
];

function insidePolygon(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Feature anchors in normalized face space — the fill mesh keeps more
// detail near them (eyes, nose, mouth).
const FEATURES = [
  [-0.28, 0.18], [0.28, 0.18], // eyes
  [0, -0.05],                  // nose tip
  [0, -0.42],                  // mouth
];

function detail(p) {
  let d = Infinity;
  for (const [fx, fy] of FEATURES) {
    d = Math.min(d, Math.hypot(p[0] - fx, p[1] - fy));
  }
  // 0.45x radius right on a feature, 1x from ~0.5 units away.
  return 0.45 + 0.55 * Math.min(1, d / 0.5);
}

// Greedy blue-noise fill: keep points no closer than r to any kept point,
// with r shrinking near facial features. Seeded with the feature rings.
function thin(points, forced, r) {
  const kept = [...forced];
  points.forEach((p, i) => {
    if (forced.includes(i)) return;
    const rp = r * detail(p);
    for (const k of kept) {
      const q = points[k];
      const dx = p[0] - q[0];
      const dy = p[1] - q[1];
      const dz = p[2] - q[2];
      if (dx * dx + dy * dy + dz * dz < rp * rp) return;
    }
    kept.push(i);
  });
  return kept;
}

// Center a raw landmark set and normalize its height.
function normalize(rawPoints) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const [x, y, z] of rawPoints) {
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
  }
  const s = HEIGHT / (maxY - minY);
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
  return rawPoints.map(([x, y, z]) => [(x - cx) * s, (y - cy) * s, (z - cz) * s]);
}

// Decide the mesh once, from a neutral frame: which landmark indices are
// vertices, and the edge list joining them (as vertex-array indices).
export function buildTopology(rawPoints) {
  const points = normalize(rawPoints);
  const forced = [...new Set(FEATURE_RINGS)].filter((i) => i < points.length);

  // Find the fill radius that lands near the target vertex count.
  let r = 0.09;
  let keptIdx = [];
  for (let i = 0; i < 8; i++) {
    keptIdx = thin(points, forced, r);
    const fill = keptIdx.length - forced.length;
    if (Math.abs(fill - TARGET_FILL) < 12) break;
    r *= Math.sqrt(Math.max(fill, 1) / TARGET_FILL);
  }

  // Discard non-ring vertices that sit inside a hole (e.g. iris landmarks).
  const forcedSet = new Set(forced);
  const rawHolePolys = HOLES.map((ring) => ring.map((o) => [points[o][0], points[o][1]]));
  keptIdx = keptIdx.filter(
    (i) =>
      forcedSet.has(i) ||
      !rawHolePolys.some((poly) => insidePolygon(points[i][0], points[i][1], poly))
  );
  const kept = keptIdx.map((i) => points[i]);

  // Triangulate the frontal projection, then keep unique edges.
  const delaunay = Delaunay.from(kept.map((p) => [p[0], p[1]]));
  const tri = delaunay.triangles;
  const edgeSet = new Set();
  for (let t = 0; t < tri.length; t += 3) {
    for (const [a, b] of [[tri[t], tri[t + 1]], [tri[t + 1], tri[t + 2]], [tri[t + 2], tri[t]]]) {
      edgeSet.add(a < b ? a * 1000 + b : b * 1000 + a);
    }
  }

  // Guarantee the hole outlines, then drop every edge crossing a hole.
  const origToNew = new Map(keptIdx.map((orig, i) => [orig, i]));
  const holes = HOLES.map((ring) => ring.map((o) => origToNew.get(o)));
  const ringMembers = [];
  const ringAdjacent = new Set();
  for (const r of holes) {
    ringMembers.push(new Set(r));
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      const b = r[(i + 1) % r.length];
      edgeSet.add(a < b ? a * 1000 + b : b * 1000 + a);
      ringAdjacent.add(a < b ? a * 1000 + b : b * 1000 + a);
    }
  }
  // A chord joins two non-adjacent vertices of the same ring — e.g. upper
  // lip to lower lip while the mouth is closed. It would stretch across the
  // hole the moment it opens, so chords are always removed.
  const isChord = (a, b, key) =>
    !ringAdjacent.has(key) && ringMembers.some((m) => m.has(a) && m.has(b));

  const seamSides = SEAM_SIDES.map(({ a, b }) => ({ a: new Set(a), b: new Set(b) }));
  const acrossSeam = (a, b) => {
    const oa = keptIdx[a];
    const ob = keptIdx[b];
    return seamSides.some(
      (s) => (s.a.has(oa) && s.b.has(ob)) || (s.b.has(oa) && s.a.has(ob))
    );
  };

  // Any edge whose 2D segment crosses a ring boundary would bridge the hole
  // once it opens (a closed mouth is a flat seam at topology time — the
  // midpoint test can't see it, so test for real segment crossings).
  const orient = (px, py, qx, qy, rx, ry) => {
    const v = (qx - px) * (ry - py) - (qy - py) * (rx - px);
    return v > 1e-12 ? 1 : v < -1e-12 ? -1 : 0;
  };
  const crossesSeam = (a, b) => {
    const ax = kept[a][0], ay = kept[a][1];
    const bx = kept[b][0], by = kept[b][1];
    for (const r of holes) {
      for (let i = 0; i < r.length; i++) {
        const c = r[i];
        const d = r[(i + 1) % r.length];
        if (c === a || c === b || d === a || d === b) continue;
        const cx = kept[c][0], cy = kept[c][1];
        const dx = kept[d][0], dy = kept[d][1];
        if (
          orient(ax, ay, bx, by, cx, cy) * orient(ax, ay, bx, by, dx, dy) < 0 &&
          orient(cx, cy, dx, dy, ax, ay) * orient(cx, cy, dx, dy, bx, by) < 0
        ) {
          return true;
        }
      }
    }
    return false;
  };
  const holePolys = holes.map((r) => {
    const pts = r.map((v) => [kept[v][0], kept[v][1]]);
    const cx0 = pts.reduce((s, p) => s + p[0], 0) / pts.length;
    const cy0 = pts.reduce((s, p) => s + p[1], 0) / pts.length;
    return pts.map(([x, y]) => [cx0 + (x - cx0) * 0.96, cy0 + (y - cy0) * 0.96]);
  });
  const crossesHole = (a, b) => {
    const mx = (kept[a][0] + kept[b][0]) / 2;
    const my = (kept[a][1] + kept[b][1]) / 2;
    return holePolys.some((poly) => insidePolygon(mx, my, poly));
  };

  // Drop the long sliver edges Delaunay adds across the outer hull.
  const lengths = [];
  const edgeLen = (a, b) =>
    Math.hypot(kept[a][0] - kept[b][0], kept[a][1] - kept[b][1], kept[a][2] - kept[b][2]);
  for (const e of edgeSet) lengths.push(edgeLen(Math.floor(e / 1000), e % 1000));
  lengths.sort((a, b) => a - b);
  const maxLen = lengths[Math.floor(lengths.length / 2)] * 2.6;

  const edges = [];
  for (const e of edgeSet) {
    const a = Math.floor(e / 1000);
    const b = e % 1000;
    if (
      edgeLen(a, b) <= maxLen &&
      !crossesHole(a, b) &&
      !isChord(a, b, e) &&
      !acrossSeam(a, b) &&
      !crossesSeam(a, b)
    ) {
      edges.push(a, b);
    }
  }

  return { keptIdx, edges };
}

// Extract one animation frame: the positions of the topology's landmarks,
// normalized the same way the topology was.
export function extractFrame(rawPoints, keptIdx) {
  const points = normalize(rawPoints);
  const out = [];
  for (const i of keptIdx) {
    out.push(
      Math.round(points[i][0] * 1000) / 1000,
      Math.round(points[i][1] * 1000) / 1000,
      Math.round(points[i][2] * 1000) / 1000
    );
  }
  return out;
}

// MediaPipe landmarks (normalized image coords) -> centered 3D points.
// x is mirrored so the wireframe behaves like a mirror.
export function toPoints(landmarks, aspect) {
  return landmarks.map((l) => [-(l.x - 0.5) * aspect, -(l.y - 0.5), -l.z * aspect]);
}

// Head pose proxy (monotonic yaw/pitch estimates) — used to index head-turn
// frames so the cursor can look them up. Takes the same display-space points
// that get stored: yaw > 0 means looking screen-right, pitch > 0 looking up.
export function poseProxy(points) {
  const nose = points[1];
  const right = points[234];
  const left = points[454];
  const top = points[10];
  const chin = points[152];
  const w = Math.hypot(left[0] - right[0], left[1] - right[1]) || 1;
  const h = Math.hypot(top[0] - chin[0], top[1] - chin[1]) || 1;
  return {
    yaw: Math.round(((nose[0] - (left[0] + right[0]) / 2) / w) * 1000) / 1000,
    pitch: Math.round(((nose[1] - (top[1] + chin[1]) / 2) / h) * 1000) / 1000,
  };
}
