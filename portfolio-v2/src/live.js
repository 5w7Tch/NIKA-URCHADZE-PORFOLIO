import { buildTopology, extractFrame, toPoints } from './wire.js';

// "Copy me": the visitor's camera drives the wireframe face live.
// Everything runs locally in the browser — no frames leave the device.
// MediaPipe (~3MB model) loads on demand, only when the button is pressed.

const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

export function initLive(sceneApi) {
  const button = document.getElementById('live-toggle');
  const hint = document.getElementById('live-hint');

  let running = false;
  let stream = null;
  let landmarker = null;
  let topology = null;
  let raf = 0;

  const setHint = (text) => (hint.textContent = text);

  async function start() {
    setHint('loading…');
    button.disabled = true;

    const video = document.createElement('video');
    video.playsInline = true;
    video.muted = true;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
      });
      video.srcObject = stream;
      await video.play();

      if (!landmarker) {
        const { FaceLandmarker, FilesetResolver } = await import('@mediapipe/tasks-vision');
        const fileset = await FilesetResolver.forVisionTasks(`${import.meta.env.BASE_URL}mediapipe-wasm`);
        landmarker = await FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numFaces: 1,
        });
      }
    } catch (err) {
      stopStream();
      button.disabled = false;
      setHint(err.name === 'NotAllowedError' ? 'camera blocked' : 'unavailable');
      setTimeout(() => setHint(''), 2500);
      return;
    }

    running = true;
    topology = null;
    button.disabled = false;
    button.setAttribute('aria-pressed', 'true');
    setHint('finding you…');

    const aspect = 640 / 480;
    const tick = () => {
      if (!running) return;
      if (video.readyState >= 2) {
        const result = landmarker.detectForVideo(video, performance.now());
        const landmarks = result?.faceLandmarks?.[0];
        if (landmarks) {
          const points = toPoints(landmarks, aspect);
          if (!topology) {
            topology = buildTopology(points);
            sceneApi.enterLive(topology.edges, topology.keptIdx.length);
            setHint('');
          }
          sceneApi.updateLive(extractFrame(points, topology.keptIdx));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
  }

  function stopStream() {
    stream?.getTracks().forEach((t) => t.stop());
    stream = null;
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
    stopStream();
    sceneApi.exitLive();
    button.setAttribute('aria-pressed', 'false');
    setHint('');
  }

  button.addEventListener('click', () => (running ? stop() : start()));
}
