import express from "express";
import { getProducts, createProduct, getProductById } from "../application/products.js";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(createProduct);

productRouter.route("/:id").get(getProductById);

export default productRouter;
