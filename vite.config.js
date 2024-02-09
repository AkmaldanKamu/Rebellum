import { defineConfig } from "vite";

export default defineConfig({
    root: 'src/',
    base: './',
    assetsInclude: ['**/*.gltf'],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        chunkSizeWarningLimit: 1600,
        sourcemap: false
    }
})