import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" },
    { find: "@Footer", replacement: "/src/components/navegation/FooterNav/components" },
    { find: "@NavBar", replacement: "/src/components/navegation/NavBar/components" }],
  },
  plugins: [react()],
})