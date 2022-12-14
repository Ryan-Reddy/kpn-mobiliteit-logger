import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/variable-page-template.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
