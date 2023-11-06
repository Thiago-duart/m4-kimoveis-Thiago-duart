import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken_middleware";
import { verifyPermission } from "../middlewares/verifyPermission_middleware";
import { SchedulesControler } from "../controllers/Schedules_controller";
import { validateBody } from "../middlewares/validateBody_middleware";
import { scheduleSchema } from "../Schemas/schedule_schema";
import { scheduleVerify } from "../middlewares/schedule_middleware";
import { realEstateByIdExists } from "../middlewares/realEstate_middleware";

export const schedulesRoutes = Router();

const scheduleControler = new SchedulesControler();

schedulesRoutes.post(
  "/",
  verifyToken,
  validateBody(scheduleSchema),
  scheduleVerify,
  scheduleControler.createSchedule
);
schedulesRoutes.get(
  "/realEstate/:id",
  realEstateByIdExists,
  verifyToken,
  verifyPermission,
  scheduleControler.findScheduleByRealEstateId
);
