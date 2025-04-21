import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SKYCAST---Weather-Application /', // 👈 Add this line
  plugins: [react()],
})
