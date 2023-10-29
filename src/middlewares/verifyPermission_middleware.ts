import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErros";

export const verifyPermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataUser = res.locals;
  if (dataUser?.decoded.admin) {
    return next();
  } else {
    throw new AppError("Insufficient permission", 403);
  }
};
