import express from "express";
import { createOrder } from "../application/orders.js";

const orderRouter = express.Router();

orderRouter.route("/").post(createOrder);

export default orderRouter;