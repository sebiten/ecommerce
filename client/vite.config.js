import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const defineConfig = ({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
    
  },
  plugins: [reactRefresh()]
  // some other configuration
})
export default defineConfig;