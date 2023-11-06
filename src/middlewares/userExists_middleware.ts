import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppErros";

export const userExistsByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(User);
  const userExists = await repo.findBy({ email: req.body?.email });
  if (userExists.length === 1) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};

export const userExistsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(User);
  const userExists = await repo.findBy({ id: +req.params.id });
  if (userExists.length !== 1) {
    console.log("id invalido");

    throw new AppError("User not found", 404);
  }
  return next();
};
