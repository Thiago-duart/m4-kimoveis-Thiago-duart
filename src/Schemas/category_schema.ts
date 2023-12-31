import { z } from "zod";

export const categorySchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(45),
  realEstate: z.number().positive(),
});

export const createCategorySchema = categorySchema.omit({
  id: true,
  realEstate: true,
});
