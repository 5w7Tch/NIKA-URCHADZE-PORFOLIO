import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the site works at the domain root and under
  // /NIKA-URCHADZE-PORFOLIO/ on GitHub Pages alike.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        capture: 'capture.html',
      },
    },
  },
});
