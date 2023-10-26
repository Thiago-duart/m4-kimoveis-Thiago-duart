import { Request, Response } from "express";
import { hash } from "bcryptjs";
import { UserResponseType, userCreate } from "../interface/User_type";
import { UsersService } from "../services/User_service";
const userService = new UsersService();
export class UsersControlle {
  async createUser(req: Request, res: Response) {
    const userData: userCreate = req.body;
    const password_hash = await hash(userData.password, 8);
    userData.password = password_hash;
    try {
      const response: Partial<UserResponseType> = await userService.createUser(
        userData
      );

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  findUsers(req: Request, res: Response) {}
  updateUser(req: Request, res: Response) {}
  deleteUser(req: Request, res: Response) {}
}
