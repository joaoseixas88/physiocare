import { Request, Response } from "express";
import { updateUserDto } from "../../model/dto/createUser.dto";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateUserUseCase = new UpdateUserUseCase();
    const { id, name, password } = req.body as updateUserDto;

    await updateUserUseCase.execute({ id, name, password });

		return res.status(201).send()
  }
}
