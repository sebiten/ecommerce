import dotenv from "dotenv";
import express from "express";
import connectDB from "./database.js";

dotenv.config();
connectDB();

const app = express();

app.use = express.json();
