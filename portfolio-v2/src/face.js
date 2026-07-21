import * as THREE from 'three';
import face from './face-wire.json';

// One continuous scene driven by scroll:
//   scroll 0   — the captured face (poses follow the cursor, idle clips play)
//   scrolling  — the face scatters back into a dot cloud…
//   scroll 1   — …which condenses into a wireframe sphere; project labels
//                orbit it, and dragging spins it with inertia.
// Face and sphere share the same scatter-morph shaders; the face runs its
// assemble morph in reverse while the sphere runs its own forward.

const CLIP_FPS = 18;
const IDLE_AFTER = 5; // seconds without pointer movement before clips fire
// ?s=0..1 pins the scroll morph to a fixed state (visual testing).
const FORCED_S = parseFloat(new URLSearchParams(location.search).get('s'));
const SCROLL_RANGE = 1.7; // morph completes after this many viewport-heights
const SPHERE_RADIUS = 0.95;
const SPHERE_POINTS = 340;
const LABEL_RADIUS = 1.38;

const MORPH_GLSL = /* glsl */ `
  attribute vec3 aScatter;
  attribute float aRand;

  uniform float uProgress;
  uniform float uTime;
  uniform float uEnergy;
  uniform float uWobble;

  varying float vFade;

  vec4 morphed() {
    // Per-vertex staggered ease between scattered cloud and target shape.
    float p = clamp(uProgress * 1.6 - aRand * 0.6, 0.0, 1.0);
    p = p * p * (3.0 - 2.0 * p);
    vec3 pos = mix(aScatter, position, p);

    // Breathing, amplified by cursor energy. Zero uWobble = rigid shape.
    float amp = uWobble * (1.0 + 7.0 * uEnergy);
    pos += amp * vec3(
      sin(uTime * 1.3 + aRand * 40.0),
      cos(uTime * 1.1 + aRand * 30.0),
      sin(uTime * 0.9 + aRand * 20.0)
    );

    vFade = p;
    return modelViewMatrix * vec4(pos, 1.0);
  }
`;

const POINT_VERTEX = /* glsl */ `
  ${MORPH_GLSL}
  uniform float uSize;
  uniform float uPixelRatio;

  void main() {
    vec4 mvPosition = morphed();
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uPixelRatio / -mvPosition.z;
  }
`;

const POINT_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.25, d);
    if (a < 0.01) discard;
    // Dots stay visible mid-flight (floor on vFade); uOpacity is the
    // object-level fade so the two shapes hand over without a gap.
    gl_FragColor = vec4(uColor, a * 0.9 * uOpacity * mix(0.35, 1.0, vFade));
  }
`;

const LINE_VERTEX = /* glsl */ `
  ${MORPH_GLSL}
  void main() {
    gl_Position = projectionMatrix * morphed();
  }
`;

const LINE_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    // Lines vanish quickly while scattered — mid-flight the dots carry the
    // motion; stretched connector lines would read as a hairball.
    float f = vFade * vFade;
    gl_FragColor = vec4(uColor, 0.35 * f * f * uOpacity);
  }
`;

function themeColor(theme) {
  return new THREE.Color(theme === 'dark' ? 0xffffff : 0x000000);
}

const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function randomScatter(count) {
  const scatter = new Float32Array(count * 3);
  const rand = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = 3.5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    scatter[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    scatter[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    scatter[i * 3 + 2] = r * Math.cos(phi);
    rand[i] = Math.random();
  }
  return { scatter, rand };
}

// Points + line segments sharing one morph, from a vertex array + edge list.
function buildWireObject(positions, edges, uniforms, dynamic) {
  const count = positions.length / 3;
  const { scatter, rand } = randomScatter(count);

  const points = new THREE.BufferGeometry();
  const pointPos = new THREE.BufferAttribute(positions, 3);
  points.setAttribute('position', pointPos);
  points.setAttribute('aScatter', new THREE.BufferAttribute(scatter, 3));
  points.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));

  const linePosArr = new Float32Array(edges.length * 3);
  const lineScatter = new Float32Array(edges.length * 3);
  const lineRand = new Float32Array(edges.length);
  for (let i = 0; i < edges.length; i++) {
    linePosArr.set(positions.subarray(edges[i] * 3, edges[i] * 3 + 3), i * 3);
    lineScatter.set(scatter.subarray(edges[i] * 3, edges[i] * 3 + 3), i * 3);
    lineRand[i] = rand[edges[i]];
  }
  const lines = new THREE.BufferGeometry();
  const linePos = new THREE.BufferAttribute(linePosArr, 3);
  lines.setAttribute('position', linePos);
  lines.setAttribute('aScatter', new THREE.BufferAttribute(lineScatter, 3));
  lines.setAttribute('aRand', new THREE.BufferAttribute(lineRand, 1));

  const shared = { uniforms, transparent: true, depthWrite: false };
  const group = new THREE.Group();
  group.add(
    new THREE.Points(points, new THREE.ShaderMaterial({ ...shared, vertexShader: POINT_VERTEX, fragmentShader: POINT_FRAGMENT })),
    new THREE.LineSegments(lines, new THREE.ShaderMaterial({ ...shared, vertexShader: LINE_VERTEX, fragmentShader: LINE_FRAGMENT }))
  );

  return dynamic ? { group, rand, pointPos, linePos, linePosArr } : { group, rand };
}

// Evenly spread sphere of dots, joined into a wireframe by proximity.
function buildSphereData() {
  const positions = new Float32Array(SPHERE_POINTS * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < SPHERE_POINTS; i++) {
    const y = 1 - (i / (SPHERE_POINTS - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    positions[i * 3] = Math.cos(a) * r * SPHERE_RADIUS;
    positions[i * 3 + 1] = y * SPHERE_RADIUS;
    positions[i * 3 + 2] = Math.sin(a) * r * SPHERE_RADIUS;
  }
  const edges = [];
  const reach = (SPHERE_RADIUS * 4.2) / Math.sqrt(SPHERE_POINTS);
  for (let i = 0; i < SPHERE_POINTS; i++) {
    for (let j = i + 1; j < SPHERE_POINTS; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      if (dx * dx + dy * dy + dz * dz < reach * reach) edges.push(i, j);
    }
  }
  return { positions, edges };
}

// Head-turn frames with yaw/pitch normalized to [-1, 1].
function normalizedPoses() {
  const poses = face.poses ?? [];
  if (!poses.length) return [];
  const ys = poses.map((p) => p.yaw);
  const ps = poses.map((p) => p.pitch);
  const yMin = Math.min(...ys), yMax = Math.max(...ys);
  const pMin = Math.min(...ps), pMax = Math.max(...ps);
  const span = (v, a, b) => (b - a < 1e-4 ? 0 : ((v - a) / (b - a)) * 2 - 1);
  return poses.map((p) => ({
    yaw: span(p.yaw, yMin, yMax),
    pitch: span(p.pitch, pMin, pMax),
    frame: p.frame,
  }));
}

// Gaussian blend of ALL recorded frames around (yaw, pitch).
function blendPoses(poses, yaw, pitch, out) {
  let total = 0;
  const weights = poses.map((p) => {
    const d2 = (p.yaw - yaw) ** 2 + (p.pitch - pitch) ** 2;
    const w = Math.exp(-d2 / 0.18);
    total += w;
    return w;
  });
  out.fill(0);
  for (let k = 0; k < poses.length; k++) {
    const w = weights[k] / total;
    if (w < 0.002) continue;
    const f = poses[k].frame;
    for (let i = 0; i < out.length; i++) out[i] += f[i] * w;
  }
}

export function createFaceScene(canvas, initialTheme) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 50);
  // On narrow (portrait) screens the camera pulls back so the face and
  // sphere always fit the width.
  const frameCamera = () => {
    camera.aspect = innerWidth / innerHeight;
    camera.position.z = Math.max(4.2, 3.9 / camera.aspect);
    camera.updateProjectionMatrix();
  };
  frameCamera();

  const targetColor = themeColor(initialTheme);
  const shared = {
    uColor: { value: targetColor.clone() },
    uTime: { value: 0 },
    uEnergy: { value: 0 },
    uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
  };
  const faceUniforms = { ...shared, uProgress: { value: reducedMotion ? 1 : 0 }, uOpacity: { value: 1 }, uSize: { value: 16 }, uWobble: { value: 0.004 } };
  // The sphere stays perfectly rigid — no breathing, no cursor shiver.
  const sphereUniforms = { ...shared, uProgress: { value: 0 }, uOpacity: { value: 0 }, uSize: { value: 13 }, uWobble: { value: 0 } };

  // --- the face (dynamic positions, animated from the capture) -------------
  const neutral = Float32Array.from(face.neutral);
  const vertexCount = neutral.length / 3;
  const displayed = Float32Array.from(neutral);
  const target = Float32Array.from(neutral);
  const edges = face.edges;
  const faceObj = buildWireObject(displayed, edges, faceUniforms, true);
  scene.add(faceObj.group);
  const faceMeshes = [...faceObj.group.children];

  // "Copy me": a live camera face replaces the captured one. Its meshes live
  // in the same group and share the face uniforms, so the scroll morph and
  // theming apply unchanged.
  let live = null;

  // --- the sphere + orbiting project labels --------------------------------
  const sphereData = buildSphereData();
  const sphereObj = buildWireObject(sphereData.positions, sphereData.edges, sphereUniforms, false);
  scene.add(sphereObj.group);

  const projectsEl = document.getElementById('projects');
  const labels = [...projectsEl.querySelectorAll('.project')];

  // Readable bottom-right index, cloned from the orbiting labels so the
  // project list lives in one place (index.html).
  const listEl = document.createElement('nav');
  listEl.id = 'project-list';
  listEl.setAttribute('aria-label', 'Project list');
  const listHeading = document.createElement('span');
  listHeading.className = 'corner-heading';
  listHeading.textContent = 'projects';
  listEl.append(listHeading);
  for (const a of labels) {
    const item = a.cloneNode(true);
    item.className = 'project-list-item';
    listEl.append(item);
  }
  document.body.append(listEl);

  const experienceEl = document.getElementById('experience');
  const scrollHintEl = document.getElementById('scroll-hint');
  const drawerArrows = [...document.querySelectorAll('.drawer-arrow')];
  const anchors = labels.map((_, i) => {
    const y = labels.length === 1 ? 0 : 1 - (i / (labels.length - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y * 0.7));
    const a = Math.PI * (3 - Math.sqrt(5)) * i + 0.6;
    return new THREE.Vector3(Math.cos(a) * r, y * 0.72, Math.sin(a) * r).multiplyScalar(LABEL_RADIUS);
  });

  // --- input ----------------------------------------------------------------
  const mouse = { x: 0, y: 0 };
  let hasPointer = false;
  let lastMove = 0;
  let energy = 0;
  addEventListener('pointermove', (e) => {
    hasPointer = true;
    lastMove = clock.getElapsedTime();
    const nx = (e.clientX / innerWidth) * 2 - 1;
    const ny = (e.clientY / innerHeight) * 2 - 1;
    energy = Math.min(1, energy + Math.hypot(nx - mouse.x, ny - mouse.y) * 2.5);
    mouse.x = nx;
    mouse.y = ny;
  });

  // Drag rotates the sphere 1:1 (once it exists); release keeps it
  // spinning with the last drag velocity.
  const spin = { x: 0.15, y: 0, vx: 0, vy: 0.1, dragging: false };
  addEventListener('pointerdown', (e) => {
    if (sphereUniforms.uProgress.value < 0.5) return;
    if (e.target.closest('a, button')) return;
    spin.dragging = true;
    spin.vx = 0;
    spin.vy = 0;
  });
  addEventListener('pointermove', (e) => {
    if (!spin.dragging) return;
    const dy = (e.movementX / innerWidth) * Math.PI * 2.6;
    const dx = (e.movementY / innerHeight) * Math.PI * 1.8;
    spin.y += dy;
    spin.x = Math.max(-1.1, Math.min(1.1, spin.x + dx));
    spin.vy = dy * 60;
    spin.vx = dx * 60;
  });
  addEventListener('pointerup', () => (spin.dragging = false));
  addEventListener('pointercancel', () => (spin.dragging = false));

  addEventListener('resize', () => {
    frameCamera();
    renderer.setSize(innerWidth, innerHeight);
    shared.uPixelRatio.value = Math.min(devicePixelRatio, 2);
  });

  // --- animation state --------------------------------------------------------
  const poses = normalizedPoses();
  const clips = face.clips ?? [];
  let clip = null;
  let nextClipAt = Infinity;

  const gaze = { yaw: 0, pitch: 0, vy: 0, vp: 0 };
  const rot = { x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0 };
  const scroll = { s: 0, v: 0 };
  const spring = (pos, vel, target, dt, k, damp) => {
    const acc = (target - pos) * k - vel * damp;
    return [pos + (vel + acc * dt) * dt, vel + acc * dt];
  };

  const rate = new Float32Array(vertexCount);
  for (let i = 0; i < vertexCount; i++) rate[i] = 0.09 + 0.22 * faceObj.rand[i];

  const worldPos = new THREE.Vector3();
  const clock = new THREE.Clock();
  let tPrev = 0;
  let assemble = reducedMotion ? 1 : 0;

  renderer.setAnimationLoop(() => {
    const t = clock.getElapsedTime();
    const dt = Math.min(0.05, t - tPrev || 0.016);
    tPrev = t;
    shared.uTime.value = reducedMotion ? 0 : t;

    if (!reducedMotion && assemble < 1) {
      assemble = Math.min(1, Math.max(0, (t - 0.5) / 2.5));
    }

    shared.uColor.value.lerp(targetColor, 0.08);
    energy *= Math.exp(-dt * 2.2);
    shared.uEnergy.value = reducedMotion ? 0 : energy;

    // -- scroll drives the face→cloud→sphere morph, on a speed-capped
    // spring: even an instant scroll fling plays the full transition --
    if (Number.isNaN(FORCED_S)) {
      const sRaw = Math.min(1, scrollY / (innerHeight * SCROLL_RANGE));
      [scroll.s, scroll.v] = spring(scroll.s, scroll.v, sRaw, dt, 70, 13);
      scroll.v = Math.max(-0.55, Math.min(0.55, scroll.v));
    } else {
      scroll.s = FORCED_S;
    }

    // Overlapping phases: the face only half-scatters (a visible cloud, not
    // an empty screen) while the sphere is already condensing out of it;
    // opacity handles the handover between the two shapes.
    const s = scroll.s;
    const toCloud = smoothstep(0, 0.6, s);
    const toSphere = smoothstep(0.25, 0.95, s);
    const faceOpacity = Math.min(1, assemble * 2) * (1 - smoothstep(0.5, 0.85, s));
    const sphereOpacity = smoothstep(0.15, 0.5, s);

    faceUniforms.uProgress.value = assemble * (1 - 0.55 * toCloud);
    faceUniforms.uOpacity.value = faceOpacity;
    sphereUniforms.uProgress.value = toSphere;
    sphereUniforms.uOpacity.value = sphereOpacity;

    // -- face animation (skipped once fully faded out, or in live mode) --
    const faceAlive = faceOpacity > 0.01;
    if (faceAlive && live) {
      // The visitor's own head motion drives the live face; ease our
      // whole-head rotation back to neutral.
      [rot.y, rot.vy] = spring(rot.y, rot.vy, 0, dt, 60, 9);
      [rot.x, rot.vx] = spring(rot.x, rot.vx, 0, dt, 60, 9);
      [rot.z, rot.vz] = spring(rot.z, rot.vz, 0, dt, 50, 9);
      faceObj.group.rotation.set(rot.x, rot.y, rot.z);
    }
    if (faceAlive && !live) {
      const wanderY = reducedMotion ? 0 : 0.1 * Math.sin(t * 0.31) + 0.06 * Math.sin(t * 0.73 + 1.7);
      const wanderP = reducedMotion ? 0 : 0.07 * Math.sin(t * 0.42 + 0.6) + 0.05 * Math.sin(t * 0.19 + 3.1);

      if (clip) {
        const f = (t - clip.start) * CLIP_FPS;
        const i = Math.floor(f);
        if (i >= clip.frames.length - 1) {
          clip = null;
          nextClipAt = t + 3 + Math.random() * 6;
        } else {
          const a = clip.frames[i];
          const b = clip.frames[i + 1];
          const k = f - i;
          for (let j = 0; j < target.length; j++) target[j] = a[j] + (b[j] - a[j]) * k;
        }
      }
      if (!clip) {
        const idle = t - lastMove > IDLE_AFTER;
        if (!reducedMotion && idle && clips.length) {
          if (nextClipAt === Infinity) nextClipAt = t + 1 + Math.random() * 4;
          if (t >= nextClipAt) clip = { frames: clips[Math.floor(Math.random() * clips.length)].frames, start: t };
        } else if (!idle) {
          nextClipAt = Infinity;
        }
        if (!clip) {
          if (poses.length) {
            const gy = (hasPointer ? mouse.x : 0) + wanderY;
            const gp = (hasPointer ? -mouse.y : 0) + wanderP;
            [gaze.yaw, gaze.vy] = spring(gaze.yaw, gaze.vy, gy, dt, 90, 11);
            [gaze.pitch, gaze.vp] = spring(gaze.pitch, gaze.vp, gp, dt, 90, 11);
            blendPoses(poses, gaze.yaw, gaze.pitch, target);
          } else {
            target.set(neutral);
          }
        }
      }

      for (let i = 0; i < vertexCount; i++) {
        const k = rate[i];
        displayed[i * 3] += (target[i * 3] - displayed[i * 3]) * k;
        displayed[i * 3 + 1] += (target[i * 3 + 1] - displayed[i * 3 + 1]) * k;
        displayed[i * 3 + 2] += (target[i * 3 + 2] - displayed[i * 3 + 2]) * k;
      }
      for (let i = 0; i < edges.length; i++) {
        faceObj.linePosArr.set(displayed.subarray(edges[i] * 3, edges[i] * 3 + 3), i * 3);
      }
      faceObj.pointPos.needsUpdate = true;
      faceObj.linePos.needsUpdate = true;

      const amp = poses.length ? 0.22 : 0.6;
      const swayY = reducedMotion ? 0 : Math.sin(t * 0.25) * 0.05;
      const swayZ = reducedMotion ? 0 : Math.sin(t * 0.17 + 0.8) * 0.02;
      const ry = (hasPointer ? mouse.x * amp : 0) + swayY;
      const rx = hasPointer ? mouse.y * amp * 0.55 : 0;
      const rz = swayZ + (reducedMotion ? 0 : -gaze.vy * 0.02);
      [rot.y, rot.vy] = spring(rot.y, rot.vy, ry, dt, 60, 9);
      [rot.x, rot.vx] = spring(rot.x, rot.vx, rx, dt, 60, 9);
      [rot.z, rot.vz] = spring(rot.z, rot.vz, rz, dt, 50, 9);
      faceObj.group.rotation.set(rot.x, rot.y, rot.z);
    }

    // -- sphere spin: dragging applies rotation directly; when released,
    // inertia carries it and eases back to a gentle auto-rotation --
    if (!spin.dragging) {
      spin.vy += ((reducedMotion ? 0 : 0.1) - spin.vy) * dt * 1.4;
      spin.vx += (0 - spin.vx) * dt * 1.4;
      spin.y += spin.vy * dt;
      spin.x = Math.max(-1.1, Math.min(1.1, spin.x + spin.vx * dt));
    }
    sphereObj.group.rotation.set(spin.x, spin.y, 0);

    // Scroll hint: appears once the face has assembled, gone once scrolling.
    scrollHintEl.style.opacity = (
      0.45 * smoothstep(0.75, 1, assemble) * (1 - smoothstep(0.02, 0.15, s))
    ).toFixed(3);

    // -- project labels track their 3D anchors --
    const labelsOn = smoothstep(0.78, 1, s);
    projectsEl.style.opacity = labelsOn.toFixed(3);
    projectsEl.classList.toggle('active', labelsOn > 0.6);
    listEl.style.opacity = labelsOn.toFixed(3);
    listEl.classList.toggle('active', labelsOn > 0.6);
    experienceEl.style.opacity = labelsOn.toFixed(3);
    experienceEl.classList.toggle('active', labelsOn > 0.6);
    for (const arrow of drawerArrows) {
      arrow.style.opacity = (labelsOn * 0.7).toFixed(3);
      arrow.classList.toggle('active', labelsOn > 0.6);
    }
    if (labelsOn > 0.01) {
      sphereObj.group.updateMatrixWorld();
      for (let i = 0; i < labels.length; i++) {
        worldPos.copy(anchors[i]).applyMatrix4(sphereObj.group.matrixWorld);
        const depth = worldPos.z / LABEL_RADIUS; // -1 behind … 1 in front
        worldPos.project(camera);
        const x = (worldPos.x * 0.5 + 0.5) * innerWidth;
        const y = (-worldPos.y * 0.5 + 0.5) * innerHeight;
        const front = (depth + 1) / 2;
        const el = labels[i];
        el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(0.72 + 0.34 * front).toFixed(3)})`;
        el.style.opacity = (0.25 + 0.75 * front).toFixed(3);
        el.style.zIndex = String(Math.round(front * 10));
      }
    }

    renderer.render(scene, camera);
  });

  return {
    setTheme(theme) {
      targetColor.copy(themeColor(theme));
    },

    // -- live "copy me" mode -------------------------------------------------
    enterLive(liveEdges, count) {
      if (live) return;
      const positions = new Float32Array(count * 3);
      const obj = buildWireObject(positions, liveEdges, faceUniforms, true);
      const meshes = [...obj.group.children];
      for (const m of meshes) faceObj.group.add(m);
      for (const m of faceMeshes) m.visible = false;
      live = { ...obj, meshes, edges: liveEdges, current: positions };
    },

    updateLive(frame) {
      if (!live) return;
      const cur = live.current;
      for (let i = 0; i < cur.length; i++) {
        cur[i] += (frame[i] - cur[i]) * 0.5;
      }
      for (let i = 0; i < live.edges.length; i++) {
        live.linePosArr.set(cur.subarray(live.edges[i] * 3, live.edges[i] * 3 + 3), i * 3);
      }
      live.pointPos.needsUpdate = true;
      live.linePos.needsUpdate = true;
    },

    exitLive() {
      if (!live) return;
      for (const m of live.meshes) {
        faceObj.group.remove(m);
        m.geometry.dispose();
      }
      for (const m of faceMeshes) m.visible = true;
      live = null;
    },
  };
}
