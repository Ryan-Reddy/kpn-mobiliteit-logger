import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: ``,
  build: {
    // outDir: './docs', // must be docs for github pages, check settings on root folder

    lib: {
      entry: './index.html',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
