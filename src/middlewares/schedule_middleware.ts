import { Equal } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/AppErros";

export const scheduleVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const realEstateRepo = AppDataSource.getRepository(RealEstate);
  const userRepo = AppDataSource.getRepository(User);

  const realEstateId: number = req.body.realEstateId;
  const userId: number = res.locals.decoded.sub;

  const realEstateResponse: RealEstate[] = await realEstateRepo.findBy({
    id: realEstateId,
  });
  if (realEstateResponse.length !== 1) {
    throw new AppError("RealEstate not found", 404);
  }

  const scheduleExistsInRealEstate: RealEstate[] = await realEstateRepo.find({
    where: { id: realEstateId },
    relations: {
      schedules: true,
    },
  });

  if (scheduleExistsInRealEstate[0]?.schedules.length === 1) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const scheduleExistsInUser: User[] = await userRepo.find({
    where: { id: userId },
    relations: {
      schedules: true,
    },
  });

  if (scheduleExistsInUser[0]?.schedules.length === 1) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const { date, hour } = req.body;
  const time = +hour.slice(0, 2);

  if (time > 18 || time < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  if (date === "2022/01/01") {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  return next();
};
