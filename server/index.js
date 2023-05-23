import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import express from "express";
import connectDB from "./database.js";
import { createServer as createViteServer } from "vite";
import path from "path";

dotenv.config();
connectDB();

async function startServer() {
  const app = express();
  const port = process.env.PORT || 5000;

  // Crear una instancia de servidor Vite en modo de desarrollo
  const vite = await createViteServer({
    server: { middlewareMode: true }
  });

  app.use(express.json());
  app.use("/api/products", productRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/orders", orderRoutes);

  app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

  // Usar el middleware de Vite en Express
  app.use(vite.middlewares);

  // Configurar rutas estáticas y envío del archivo index.html
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
  }

  // Iniciar el servidor de Express
  app.listen(port, () => {
    console.log(`Servidor Express iniciado en el puerto ${port}`);
  });
}

startServer();
