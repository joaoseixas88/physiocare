import { Request, Response } from "express";
import { updateUserDto } from "../../model/dto/createUser.dto";
import { userPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateUserUseCase = new UpdateUserUseCase(userPrismaRepository);
		const {id} = req.user
    const { name, password } = req.body as updateUserDto;

    await updateUserUseCase.execute({ id, name, password });

		return res.status(201).send()
  }
}
