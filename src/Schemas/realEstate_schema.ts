import { number, z } from "zod";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number(),
  schedule: z.number().positive(),
  createAt: z.date(),
  updateAt: z.date(),
  addressId: z.number().positive(),
  categoryId: z.array(z.number().positive()),
});
