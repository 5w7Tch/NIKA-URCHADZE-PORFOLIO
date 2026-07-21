// Terminal window that opens over the sphere when a project is clicked.
// Content comes from the clicked element's data attributes (see the
// #projects nav in index.html).

const terminal = document.getElementById('terminal');
const titleEl = terminal.querySelector('.term-title');
const bodyEl = terminal.querySelector('.term-body');
const closeBtn = terminal.querySelector('.term-close');

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function line(prompt, content) {
  const p = document.createElement('p');
  const cmd = document.createElement('span');
  cmd.className = 'prompt';
  cmd.textContent = `$ ${prompt}`;
  p.append(cmd);
  if (content) p.append(document.createElement('br'), content);
  return p;
}

function open(el) {
  const name = el.textContent.trim();
  const { desc, tags, github, link, note, role, dates } = el.dataset;
  const isExperience = Boolean(role);

  terminal.classList.toggle('red', isExperience);
  titleEl.textContent = `nika@portfolio ~ /${isExperience ? 'experience' : 'projects'}/${slug(name)}`;
  bodyEl.replaceChildren();

  if (isExperience) bodyEl.append(line('whoami', `${role} @ ${name} (${dates})`));
  else if (dates) bodyEl.append(line('cat timeline.txt', dates));
  bodyEl.append(line('cat about.txt', desc || name));
  if (tags) bodyEl.append(line('ls stack/', tags.split(',').map((t) => t.trim()).join('   ')));

  const links = document.createElement('div');
  links.className = 'term-links';
  if (github) links.append(button('github ↗', github));
  if (link) links.append(button(`${new URL(link).hostname.replace('www.', '')} ↗`, link));

  if (links.children.length) {
    bodyEl.append(line('open links/'), links);
  } else if (!isExperience) {
    const why = note === 'university' ? 'university coursework' : 'private project';
    const msg = document.createElement('span');
    msg.className = 'term-note';
    msg.textContent = `no public links — ${why}`;
    bodyEl.append(line('open links/', msg));
  }

  const cursorLine = document.createElement('p');
  const cursor = document.createElement('span');
  cursor.className = 'term-cursor';
  cursorLine.append(Object.assign(document.createElement('span'), { className: 'prompt', textContent: '$ ' }), cursor);
  bodyEl.append(cursorLine);

  terminal.hidden = false;
  closeBtn.focus();
}

function button(label, href) {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = label;
  return a;
}

function close() {
  terminal.hidden = true;
}

export function initTerminal() {
  document.addEventListener('click', (e) => {
    const entry = e.target.closest('.project, .project-list-item, .xp');
    if (!entry) return;
    e.preventDefault();
    open(entry);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !terminal.hidden) close();
    // Unlinked entries are focusable anchors; open them with Enter too.
    if (e.key === 'Enter' && e.target.matches?.('.project:not([href]), .project-list-item:not([href]), .xp')) {
      open(e.target);
    }
  });
  closeBtn.addEventListener('click', close);
  terminal.querySelector('.term-backdrop').addEventListener('click', close);
  // Keep pointer interactions inside the terminal from spinning the sphere.
  terminal.addEventListener('pointerdown', (e) => e.stopPropagation());

  // ?project=<slug> deep-links straight to a project's or role's terminal.
  const wanted = new URLSearchParams(location.search).get('project');
  if (wanted) {
    const match = [...document.querySelectorAll('#projects .project, #experience .xp')].find(
      (el) => slug(el.textContent.trim()) === wanted
    );
    if (match) open(match);
  }
}
