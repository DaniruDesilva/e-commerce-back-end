import Order from "../infrastructure/schemas/Order.js";
import { createOrderDto } from "./dto/orders.js";

export const createOrder = async (req, res) => {
  //! we need to make sure that data is always in the correct format
  const order = createOrderDto.safeParse(req.body);

  if (!order.success) {
    return res
      .status(400)
      .json({ message: `${order.error.message}` })
      .send();
  }

  await Order.create({
    userId: order.data.userId,
    orderProducts: order.data.userId,
    orderProducts: order.data.orderProducts,
  });
  return res.status(201).send();
};
