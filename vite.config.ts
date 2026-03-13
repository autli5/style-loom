import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/style-loom/'  // <--- этот префикс нужен для GitHub Pages
});