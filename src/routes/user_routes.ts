import { userExistsByEmail } from "./../middlewares/userExists_middleware";
import { Router } from "express";
import { UsersControlle } from "../controllers/User_controller";
import { validateBody } from "../middlewares/validateBody_middleware";
import { createuserSchema } from "../Schemas/user_schema";

export const userRoutes = Router();
const userController = new UsersControlle();
userRoutes.post(
  "/",
  validateBody(createuserSchema),
  userExistsByEmail,
  userController.createUser
);
userRoutes.get("/");
userRoutes.patch("/:id");
userRoutes.delete("/:id");
