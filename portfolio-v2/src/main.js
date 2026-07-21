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

// Mobile drawers: the side arrows slide out the experience / project lists.
const drawers = [
  { arrow: document.getElementById('work-arrow'), panel: document.getElementById('experience') },
  { arrow: document.getElementById('projects-arrow'), panel: document.getElementById('project-list') },
];
for (const { arrow, panel } of drawers) {
  arrow.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    arrow.classList.toggle('open', open);
    arrow.setAttribute('aria-expanded', String(open));
    for (const other of drawers) {
      if (other.arrow === arrow) continue;
      other.panel.classList.remove('open');
      other.arrow.classList.remove('open');
      other.arrow.setAttribute('aria-expanded', 'false');
    }
  });
}

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
