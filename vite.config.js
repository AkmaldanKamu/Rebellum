import { defineConfig } from "vite";

export default defineConfig({
    root: 'src/',
    base: './',
    assetsInclude: ['src/assets/celurit/**'],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        chunkSizeWarningLimit: 1600,
        sourcemap: false
    },
    publicDir: './assets/celurit'
})