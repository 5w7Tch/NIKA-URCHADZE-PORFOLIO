import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { buildTopology, extractFrame, poseProxy, toPoints } from './wire.js';

// Face capture studio:
// 1. Lock face      — freezes the wireframe topology from a neutral frame
// 2. Record turn    — slowly turn your head; frames are indexed by pose so
//                     the site can replay them as the cursor moves
// 3. Record expression — perform a wink/smile/…; played when the site idles
// 4. Download       — saves everything as face-wire.json

const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

const CLIP_FPS = 18;
const CLIP_MAX_SECONDS = 4.5;
const POSE_SPACING = 0.045; // min yaw/pitch distance between stored turn frames
const POSE_MAX = 40;

const canvas = document.getElementById('view');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');
const counts = document.getElementById('counts');
const lockBtn = document.getElementById('lock');
const turnBtn = document.getElementById('turn');
const exprBtn = document.getElementById('expr');
const saveBtn = document.getElementById('save');

function drawWire(positions, edges, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const s = h * 0.42; // frames are normalized to ~1.85 units tall
  const px = (i) => cx + positions[i * 3] * s;
  const py = (i) => cy - positions[i * 3 + 1] * s;

  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let e = 0; e < edges.length; e += 2) {
    ctx.moveTo(px(edges[e]), py(edges[e]));
    ctx.lineTo(px(edges[e + 1]), py(edges[e + 1]));
  }
  ctx.stroke();

  ctx.fillStyle = '#fff';
  for (let i = 0; i < positions.length / 3; i++) {
    ctx.beginPath();
    ctx.arc(px(i), py(i), 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Thin a raw turn recording down to well-spread pose frames.
function spreadPoses(recorded) {
  const kept = [];
  for (const f of recorded) {
    if (
      !kept.some((k) => Math.hypot(k.yaw - f.yaw, k.pitch - f.pitch) < POSE_SPACING)
    ) {
      kept.push(f);
      if (kept.length >= POSE_MAX) break;
    }
  }
  return kept;
}

async function main() {
  const video = document.createElement('video');
  video.playsInline = true;
  video.muted = true;

  try {
    video.srcObject = await navigator.mediaDevices.getUserMedia({
      video: { width: 960, height: 720, facingMode: 'user' },
    });
    await video.play();
  } catch (err) {
    status.textContent = `camera unavailable: ${err.message}`;
    return;
  }

  status.textContent = 'loading face tracker…';
  const fileset = await FilesetResolver.forVisionTasks(`${import.meta.env.BASE_URL}mediapipe-wasm`);
  const landmarker = await FaceLandmarker.createFromOptions(fileset, {
    baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
    runningMode: 'VIDEO',
    numFaces: 1,
  });

  let topology = null; // { keptIdx, edges }
  let neutral = null;
  let poses = [];
  const clips = [];
  let lastPoints = null;

  let recordingTurn = null; // raw frames while recording
  let recordingClip = null; // { frames, startedAt, lastAt }

  function refreshUI() {
    lockBtn.disabled = !lastPoints;
    turnBtn.disabled = !topology;
    exprBtn.disabled = !topology;
    saveBtn.disabled = !topology;
    turnBtn.textContent = recordingTurn ? 'Stop turn ■' : 'Record head turn';
    exprBtn.textContent = recordingClip ? 'Stop expression ■' : 'Record expression';
    counts.textContent = topology
      ? `locked: ${topology.keptIdx.length} vertices · turn frames: ${poses.length} · expressions: ${
          clips.map((c) => c.name).join(', ') || 'none'
        }`
      : '';
  }

  function tick() {
    const w = canvas.width;
    const h = canvas.height;
    const result = video.readyState >= 2 ? landmarker.detectForVideo(video, performance.now()) : null;

    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -w, 0, w, h);
    ctx.restore();
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.fillRect(0, 0, w, h);

    const landmarks = result?.faceLandmarks?.[0];
    lastPoints = landmarks ? toPoints(landmarks, w / h) : null;

    if (lastPoints) {
      const now = performance.now();
      if (topology) {
        const frame = extractFrame(lastPoints, topology.keptIdx);
        drawWire(frame, topology.edges, w, h);

        if (recordingTurn && now - (recordingTurn.lastAt ?? 0) > 80) {
          const { yaw, pitch } = poseProxy(lastPoints);
          recordingTurn.frames.push({ yaw, pitch, frame });
          recordingTurn.lastAt = now;
          status.textContent = `recording turn… ${recordingTurn.frames.length} frames — slowly look around`;
        }
        if (recordingClip && now - (recordingClip.lastAt ?? 0) > 1000 / CLIP_FPS) {
          recordingClip.frames.push(frame);
          recordingClip.lastAt = now;
          status.textContent = `recording expression… ${(recordingClip.frames.length / CLIP_FPS).toFixed(1)}s`;
          if (recordingClip.frames.length >= CLIP_FPS * CLIP_MAX_SECONDS) stopClip();
        }
        if (!recordingTurn && !recordingClip) {
          status.textContent = 'face locked — record a head turn and some expressions, then download';
        }
      } else {
        // Not locked yet: preview with a throwaway topology.
        const t = buildTopology(lastPoints);
        drawWire(extractFrame(lastPoints, t.keptIdx), t.edges, w, h);
        status.textContent = 'look straight at the camera, then hit Lock face';
      }
    } else {
      status.textContent = 'no face detected';
    }
    refreshUI();
    requestAnimationFrame(tick);
  }
  tick();

  lockBtn.addEventListener('click', () => {
    if (!lastPoints) return;
    topology = buildTopology(lastPoints);
    neutral = extractFrame(lastPoints, topology.keptIdx);
    poses = [];
    clips.length = 0;
  });

  turnBtn.addEventListener('click', () => {
    if (recordingTurn) {
      poses = spreadPoses(recordingTurn.frames);
      recordingTurn = null;
      status.textContent = `stored ${poses.length} pose frames`;
    } else {
      recordingTurn = { frames: [] };
    }
  });

  function stopClip() {
    const name = prompt('name this expression:', `expression ${clips.length + 1}`) || `clip ${clips.length + 1}`;
    clips.push({ name, frames: recordingClip.frames });
    recordingClip = null;
  }
  exprBtn.addEventListener('click', () => {
    if (recordingClip) stopClip();
    else recordingClip = { frames: [] };
  });

  saveBtn.addEventListener('click', () => {
    // Finalize any recording still running so nothing is silently lost.
    if (recordingTurn) {
      poses = spreadPoses(recordingTurn.frames);
      recordingTurn = null;
    }
    if (recordingClip) stopClip();
    const data = { edges: topology.edges, neutral, poses, clips };
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'face-wire.json';
    a.click();
    URL.revokeObjectURL(a.href);
    status.textContent = 'saved! move face-wire.json into src/ and reload the site';
  });
}

main();
