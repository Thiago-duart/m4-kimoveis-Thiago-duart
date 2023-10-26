import { Router } from "express";
import { UsersControlle } from "../controllers/User_controller";

export const userRoutes = Router();
const userController = new UsersControlle();
userRoutes.post("/", userController.createUser);
userRoutes.get("/");
userRoutes.patch("/:id");
userRoutes.delete("/:id");
