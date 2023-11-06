import { Address } from "./../entities/Address_entities";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppErros";

export const addressByNumberExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(Address);

  const { address } = req.body;

  const response = await repo.findBy(address);

  if (response.length === 1) {
    throw new AppError("Address already exists", 409);
  }
  return next();
};
