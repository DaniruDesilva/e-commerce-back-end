import { z } from "zod";

export const creteProductDto = z.object({
  categoryId: z.string(),
  image: z.string(),
  name: z.string(),
  price: z.string(),
});
