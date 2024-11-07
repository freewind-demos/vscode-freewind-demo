import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/extension.ts'),
            formats: ['cjs'],
            fileName: () => 'extension.js'
        },
        outDir: 'out',
        rollupOptions: {
            external: ['vscode'],
            output: {
                preserveModules: false,
                format: 'cjs'
            }
        },
        sourcemap: false,
        minify: false,
        target: 'esnext',
        emptyOutDir: true
    }
}); 