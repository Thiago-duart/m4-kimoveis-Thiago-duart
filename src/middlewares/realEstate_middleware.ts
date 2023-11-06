import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import AppError from "../errors/AppErros";

export const realEstateByIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const realEstateRepo = AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate[] = await realEstateRepo.findBy({
    id: +req.params.id,
  });

  if (realEstate.length !== 1) {
    throw new AppError("RealEstate not found", 404);
  }

  return next();
};
