# Nika Urchadze — Portfolio v2

Minimal black & white portfolio: a centered signature and a 3D face built from dots.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## The face

The site renders a low-poly 3D wireframe portrait — triangulated lines with
vertex dots — animated from recorded capture data in `src/face-wire.json`:

- **neutral** — the resting face
- **poses** — head-turn frames indexed by yaw/pitch; moving the cursor
  blends between them, so the face follows the mouse with real recorded
  motion (parallax, silhouette changes), not a rigid rotation
- **clips** — expression recordings (wink, smile, …) that fire at random
  when the page sits idle for a few seconds

To capture YOUR face:

1. `npm run dev`, then open <http://localhost:5173/capture.html>
   (needs internet once, to fetch the face tracker model)
2. Look straight ahead → **Lock face** (freezes the mesh topology)
3. **Record head turn** → slowly look left/right/up/down → stop
4. **Record expression** → wink/smile/raise brows → stop, name it
   (repeat for as many expressions as you like)
5. **Download** → move `face-wire.json` into `src/` (replacing the old one)

All frames share the locked topology, so everything blends smoothly. The
shipped default (built from MediaPipe's canonical face model by
`scripts/build-default-wire.mjs`) has no recordings — the site falls back
to a simple rotation follow until a real capture replaces it. Wireframe
density and feature detail are tuned in `src/wire.js`.

## Copy me (live mode)

The face-icon button top-left asks for the visitor's camera and turns the
wireframe into *their* face, tracking expressions live. Fully local
(MediaPipe in the browser, loaded on demand); stop returns Nika's face.

## Scroll: projects sphere

Scrolling scatters the face into a dot cloud that condenses into a
wireframe sphere. Project links (edit them in `index.html`, the
`#projects` nav) orbit the sphere in 3D — drag anywhere to spin it, with
inertia; labels track their anchors and fade/scale with depth. Scrolling
back up reassembles the face. `?view=projects` deep-links straight to the
sphere; `?s=0..1` pins the morph to a fixed state for visual testing.

## Structure

- `index.html` — shell: signature header + theme toggle + canvas
- `capture.html` + `src/capture.js` — webcam face-capture tool
- `src/style.css` — black/white theming (day/night via `data-theme`)
- `src/main.js` — boot + theme toggle
- `src/face.js` — Three.js wireframe renderer (assemble animation, cursor stare, theming)
- `src/wire.js` — shared wireframe builder (landmark thinning + triangulation)
- `src/face-wire.json` — the stored face
- `public/fonts/signature.ttf` — Mr Dafoe (OFL) signature typeface
- `public/mediapipe-wasm/` — face tracker runtime for the capture page
