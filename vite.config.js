import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, 'about.html'),
        third: resolve(__dirname, 'career.html'),
        fourth: resolve(__dirname, 'location.html'),
      },
    },
  },
});
