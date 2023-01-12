import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: ``,
  build: {
    server: {
      // https: true,
      host: true,
      port: 5173,
      secure: false,
      strictPort: true,
      hmr: {
        port: 5173,
        host: true,
      },
    },
    lib: {
      entry: './index.html',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
