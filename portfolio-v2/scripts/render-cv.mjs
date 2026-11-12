// Renders cv/cv.html to NIKA_URCHADZE_<YYYYMMDD>.pdf with headless Chrome,
// then reports the page count so an overflow onto a second page is visible.
//
// Usage: npm run cv

import { execFileSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const source = new URL('../cv/cv.html', import.meta.url);
const stamp = new Date().toISOString().slice(0, 10).replaceAll('-', '');
const out = fileURLToPath(new URL(`../NIKA_URCHADZE_${stamp}.pdf`, import.meta.url));

execFileSync(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  // Gives the Google Fonts stylesheet time to load before printing.
  '--virtual-time-budget=8000',
  `--print-to-pdf=${out}`,
  source.href,
], { stdio: ['ignore', 'ignore', 'ignore'] });

const pdf = readFileSync(out, 'latin1');
// A font that failed to load falls back to a system font without any error.
if (!/\/FontName\s*\/[A-Z]{6}\+Inter/.test(pdf)) throw new Error(`${out}: Inter is not embedded — did the font CDN load?`);
const pages = pdf.match(/\/Type\s*\/Page\b/g).length;
console.log(`wrote ${out} (${pages} page${pages === 1 ? '' : 's'})`);
