import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password, name } = req.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({ email, password, name });

		return res.status(201).json(result)
  }
}
