import { z } from "zod";

export const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().min(1).max(45),
  zipCode: z.string().min(1).max(8),
  number: z.number(),
  city: z.string().min(1).max(20),
  state: z.string().min(1).max(20),
  realEstates: z.number().positive(),
});

export const createAddressSchema = addressSchema.omit({
  id: true,
  realEstates: true,
});
