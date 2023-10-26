import { z } from "zod";

const categorySchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(45),
  realEstate: z.number().positive(),
});
