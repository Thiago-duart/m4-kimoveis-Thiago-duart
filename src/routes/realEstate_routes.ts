import { Router } from "express";
import { RealEstateController } from "../controllers/RealState_controller";
import { verifyToken } from "../middlewares/verifyToken_middleware";
import { verifyPermission } from "../middlewares/verifyPermission_middleware";
import { validateBody } from "../middlewares/validateBody_middleware";
import { createRealEstateSchema } from "../Schemas/realEstate_schema";
import { addressByNumberExists } from "../middlewares/addressExists_middleware";

export const realEstateRoutes = Router();

const realEstate = new RealEstateController();

realEstateRoutes.post(
  "/",
  verifyToken,
  verifyPermission,
  validateBody(createRealEstateSchema),
  addressByNumberExists,
  realEstate.createRealEstate
);
realEstateRoutes.get("/", realEstate.findCategories);
