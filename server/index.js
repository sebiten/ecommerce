import dotenv from "dotenv";
import express from "express";
import connectDB from "./database.js";

// our routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/useRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
