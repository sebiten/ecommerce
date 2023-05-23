// vite.config.js (dentro de la carpeta client)
const path = require('path');
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, '../server/public'),
    assetsDir: '',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.js'),
      },
    },
  },
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
});
