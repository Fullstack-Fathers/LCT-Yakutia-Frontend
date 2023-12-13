import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
  server: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    emptyOutDir: true,
    manifest: true,
  },
});
