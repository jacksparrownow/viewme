// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',       // project root
  base: './',      // relative base path
  build: {
    outDir: 'dist'
  }
});
