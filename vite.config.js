import { defineConfig } from "vite";
import tailwindcss from 'tailwindcss';


export default defineConfig({
  root: 'src/',
  base: './',
  assetsInclude: ['src/assets/3D/**'],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
    sourcemap: false
  },
  publicDir: './assets/3D',
  plugins: [tailwindcss()],
})