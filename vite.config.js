import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This tells Vite to fallback to index.html for all routes
    historyApiFallback: true,
  },
});