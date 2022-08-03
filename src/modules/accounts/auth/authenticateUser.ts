import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import auth from "../../../config/auth";
import { prisma } from "../../../db/prisma";
import { AppError } from "../../../error/AppError";

export async function authenticateUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) throw new AppError("Email or password is missing");
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      password: true,
      email: true,
    },
  });

  if (!user) throw new AppError("Email or Password incorrect", 400);

  const verifiedPassword = await compare(password, user.password);

  if (!verifiedPassword) throw new AppError("Email or Password incorrect", 400);

  const token = sign({}, auth.jwt_secret, {
    expiresIn: "1d",
    subject: user.id,
  });

  return res.status(200).json({
    token,
  });
}
