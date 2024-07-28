import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const productionBase = process.env.PRODUCTION_BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: productionBase,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/common.scss";`
      },
    },
  },
})
