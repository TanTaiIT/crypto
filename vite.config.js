import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },

  css: {
    devSourcemap: true
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
