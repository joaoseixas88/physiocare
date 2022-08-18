import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import { AppError } from "../error/AppError";

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new AppError("Token is missing");

  try {
    const { sub: userId } = verify(token, auth.jwt_secret);

    req.user = {
      id: userId as string,
    };
  } catch (error) {
    

    throw new AppError("Invalid token");
  }

  next();
}
