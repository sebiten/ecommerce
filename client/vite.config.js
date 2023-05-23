import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default {
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configura alias para rutas relativas
    },
  },
};
