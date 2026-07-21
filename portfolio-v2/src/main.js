import './style.css';
import { createFaceScene } from './face.js';
import { initTerminal } from './terminal.js';
import { initLive } from './live.js';

const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const canvas = document.getElementById('scene');

const scene = createFaceScene(canvas, root.dataset.theme);
initTerminal();
initLive(scene);

// Deep link straight to the projects sphere.
if (new URLSearchParams(location.search).get('view') === 'projects') {
  requestAnimationFrame(() => scrollTo(0, document.body.scrollHeight));
}

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  scene.setTheme(next);
});
