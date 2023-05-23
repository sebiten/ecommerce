import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database.js";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";


connectDB();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const port = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
