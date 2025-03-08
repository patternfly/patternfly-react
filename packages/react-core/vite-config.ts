import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import figmaTransformPlugin from './plugins/vite-figma-transform.js';

export default defineConfig({
  plugins: [
    // React plugin for JSX/TSX processing
    react(),

    // Our custom Figma URL transformer plugin
    figmaTransformPlugin({
      verbose: true,
      writeBack: true,
      // Make sure this pattern matches your project structure
      pattern: /\.figma\.tsx$/
    })
  ],

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild'
  },

  server: {
    port: 3000,
    open: true,
    host: true,
    watch: {
      // Use polling in environments where normal watching doesn't detect changes
      // usePolling: true,
      // interval: 1000,

      // Instead of using 'include', we ensure .figma.tsx files are watched
      // by NOT including them in the 'ignored' patterns
      ignored: [
        '**/node_modules/**',
        '**/dist/**'
        // .figma.tsx files will be watched by default since they're not ignored
      ]
    }
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src' // Enable @ imports for src directory
    }
  }
});
