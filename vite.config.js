import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure extensions are explicit and content types are correct
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Ensure modules are processed correctly
        format: 'es',
        generatedCode: {
          preset: 'es2015'
        }
      }
    }
  },
  // Add base path for GitHub Pages deployment
  base: '/'
})
