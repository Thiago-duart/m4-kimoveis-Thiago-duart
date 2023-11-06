import { Router } from "express";
import { UsersControlle } from "../controllers/User_controller";
import { createuserSchema } from "../Schemas/user_schema";
import { validateBody } from "../middlewares/validateBody_middleware";
import {
  userExistsByEmail,
  userExistsById,
} from "../middlewares/userExists_middleware";
import { verifyToken } from "../middlewares/verifyToken_middleware";
import { verifyPermission } from "../middlewares/verifyPermission_middleware";

export const userRoutes = Router();
const userController = new UsersControlle();
userRoutes.post(
  "/",
  validateBody(createuserSchema),
  userExistsByEmail,
  userController.createUser
);
userRoutes.get("/", verifyToken, verifyPermission, userController.findUsers);
userRoutes.patch(
  "/:id",
  verifyToken,
  userExistsById,
  userController.updateUser
);
userRoutes.delete(
  "/:id",
  verifyToken,
  userExistsById,
  verifyPermission,
  userController.deleteUser
);
