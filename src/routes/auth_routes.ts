import { Router } from "express";
import { UsersControlle } from "../controllers/User_controller";

export const authRoute = Router();
const usersControler = new UsersControlle();

authRoute.post("/", usersControler.login);
