import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  server: {
    proxy: {
      "/api/products": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/api/users/login": {  // Add another proxy for "/api/users"
        target: "http://localhost:5000",  // Update the target URL as per your requirement
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [reactRefresh()]
  // some other configuration
})