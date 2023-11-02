import { number, z } from "zod";

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.union([z.number(), z.string()]).default(0),
  size: z.number().min(1),
  schedule: z.number().positive(),
  createAt: z.date(),
  updateAt: z.date(),
  addressId: z.number().positive(),
  categoryId: z.array(z.number().positive()),
});

export const createRealEstateSchema = z.object({
  value: z.union([z.number(), z.string()]).default(0),
  size: z.number().positive(),
  categoryId: z.number().positive(),
  address: z.object({
    street: z.string().min(1).max(45),
    zipCode: z.string().min(1).max(8),
    number: z.number(),
    city: z.string().min(1).max(20),
    state: z.string().min(1).max(2),
  }),
});
