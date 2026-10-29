import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 저장소 경로 (https://<user>.github.io/my-portfolio/)
  base: '/my-portfolio/',
  plugins: [react()],
})
