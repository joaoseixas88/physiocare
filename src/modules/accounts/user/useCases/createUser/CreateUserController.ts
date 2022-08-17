import { Request, Response } from "express";
import { userPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password, name } = req.body;
		
    const createUserUseCase = new CreateUserUseCase(userPrismaRepository);
    const result = await createUserUseCase.execute({ email, password, name });

		return res.status(201).json(result)
  }
}
