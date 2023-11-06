import { Router } from "express";
import { CategoryControler } from "../controllers/Categories_controller";
import {
  categoryByIdExists,
  categoryByNameExists,
} from "../middlewares/categoryExists_middleware";
import { verifyPermission } from "../middlewares/verifyPermission_middleware";
import { verifyToken } from "../middlewares/verifyToken_middleware";
import { validateBody } from "../middlewares/validateBody_middleware";
import { createCategorySchema } from "../Schemas/category_schema";

export const categoryRouter = Router();

const categoryControler = new CategoryControler();

categoryRouter.post(
  "/",
  validateBody(createCategorySchema),
  verifyToken,
  verifyPermission,
  categoryByNameExists,
  categoryControler.createCategory
);
categoryRouter.get("/", categoryControler.findCategories);
categoryRouter.get(
  "/:id/realEstate",
  categoryByIdExists,
  categoryControler.findRealEstatesByCategory
);
