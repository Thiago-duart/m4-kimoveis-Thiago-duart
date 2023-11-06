import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErros";
import {
  JsonWebTokenError,
  JwtPayload,
  TokenExpiredError,
  verify,
} from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);
  try {
    const token: string = authorization.split(" ")[1];

    const decoded: string | JwtPayload = verify(token, process.env.SECRET_KEY!);

    res.locals = { ...res.locals, decoded };

    return next();
  } catch (error: unknown) {
    if (error instanceof JsonWebTokenError) {
      throw new AppError(error.message, 401);
    }
  }
};
