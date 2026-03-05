import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This must exactly match your repository name, with the slashes!
  base: "/panchagrami-saradamoni-vidyapith/", 
  plugins: [react()],
})