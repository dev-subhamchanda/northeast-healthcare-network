import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    histroryApiFallback: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
