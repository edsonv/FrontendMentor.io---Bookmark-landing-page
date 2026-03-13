import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/FrontendMentor.io---Bookmark-landing-page/' : '/',
  plugins: [react(),tailwindcss(), tsconfigPaths()],
})
