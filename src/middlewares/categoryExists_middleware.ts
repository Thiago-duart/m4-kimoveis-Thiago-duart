import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import AppError from "../errors/AppErros";

export const categoryByNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(Category);
  const categoryName: string = req.body.name;

  const response: Category[] = await repo.findBy({ name: categoryName });

  if (response.length === 1) {
    throw new AppError("Category already exists", 409);
  }
  return next();
};
export const categoryByIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(Category);

  const categoryId: number = +req.params.id;

  const response: Category[] = await repo.findBy({ id: categoryId });

  if (response.length !== 1) {
    throw new AppError("Category not found", 404);
  }
  return next();
};
