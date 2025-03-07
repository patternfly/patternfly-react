import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  resolve: {
    alias: {
      '@components': path.resolve('./src/components')
    }
  },
  build: {
    // Exclude Figma integration from production builds
    rollupOptions: {
      external: process.env.NODE_ENV === 'production' ? ['@figma/code-connect'] : []
    }
  }
});
