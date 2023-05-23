import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [reactRefresh()],
  build: {
    outDir: 'client/dist',
    assetsDir: 'assets',
    // Otras opciones de configuración para la compilación
  },
});
