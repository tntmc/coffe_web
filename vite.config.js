import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/coffe_web",
  // vite: {
  //   server: {
  //     allowedHosts: [' https://70b1-2404-8000-1029-1531-856a-1174-dafe-4b65.ngrok-free.app']
  //   }
  // }
})
