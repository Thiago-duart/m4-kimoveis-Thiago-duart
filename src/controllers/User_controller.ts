import { Request, Response } from "express";
import { UserResponseType, userCreate } from "../interface/User_type";
import { UsersService } from "../services/User_service";
import { tokenType } from "../interface/auth_type";
const userService = new UsersService();
export class UsersControlle {
  async createUser(req: Request, res: Response) {
    const userData: userCreate = req.body;

    try {
      const response: UserResponseType = await userService.createUser(userData);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async findUsers(req: Request, res: Response) {
    try {
      const response: Array<UserResponseType> = await userService.findUsers();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async updateUser(req: Request, res: Response) {
    const response = await userService.updateUser(
      +req.params.id,
      req.body,
      res.locals.decoded
    );
    res.status(200).json(response);
  }
  async deleteUser(req: Request, res: Response) {
    const response = await userService.deleteUser(+req.params.id);

    res.status(204).json(response);
  }
  async login(req: Request, res: Response) {
    const response: tokenType = await userService.login(req.body);
    res.status(200).json(response);
  }
}
