import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion') || id.includes('swiper') || id.includes('lucide') || id.includes('react-icons')) {
              return 'ui';
            }
            if (id.includes('ogl')) {
              return 'gl';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
