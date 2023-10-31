import { z } from "zod";
import {
  categorySchema,
  createCategorySchema,
} from "../Schemas/category_schema";

export type CategoryType = z.infer<typeof categorySchema>;
export type CreateCategoryType = z.infer<typeof createCategorySchema>;
export type responseCategory = Partial<CategoryType>;
