// Generates src/face-wire.json from MediaPipe's canonical (neutral) face
// model, using the same pipeline as the capture page — so the shipped
// default face has exactly the style a real capture produces. The default
// has no recorded poses or expression clips; the site falls back to a
// simple rotation follow until a real capture replaces it.
//
// Usage: node scripts/build-default-wire.mjs <canonical_face_model.obj>

import { readFileSync, writeFileSync } from 'fs';
import { buildTopology, extractFrame } from '../src/wire.js';

const obj = readFileSync(process.argv[2], 'utf8');
const points = [];
for (const line of obj.split('\n')) {
  if (line.startsWith('v ')) {
    const [, x, y, z] = line.trim().split(/\s+/);
    points.push([Number(x), Number(y), Number(z)]);
  }
}
console.log(`canonical model: ${points.length} vertices`);

const topology = buildTopology(points);
const neutral = extractFrame(points, topology.keptIdx);
console.log(`wireframe: ${topology.keptIdx.length} vertices, ${topology.edges.length / 2} edges`);

const data = { edges: topology.edges, neutral, poses: [], clips: [] };
writeFileSync(new URL('../src/face-wire.json', import.meta.url), JSON.stringify(data));
console.log('wrote src/face-wire.json');
