import dotenv from "dotenv";
import express from "express";
import connectDB from "./database.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use = express.json();
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
