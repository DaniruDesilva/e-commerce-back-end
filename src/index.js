"use strict";

import express from "express";
import productRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import { connectDb } from "./infrastructure/db.js";
import orderRouter from "./api/orders.js";

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", orderRouter);

const PORT = 8000;

connectDb();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
