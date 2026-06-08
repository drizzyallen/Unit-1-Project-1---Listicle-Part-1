import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/budgies': {
        target: 'http://localhost:3002'
      }
    }
  }
})