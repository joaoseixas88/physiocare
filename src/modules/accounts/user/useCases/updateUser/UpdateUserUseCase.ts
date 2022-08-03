import { updateUserDto } from "../../model/dto/createUser.dto";
import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";

export interface IRequest {}


export class UpdateUserUseCase {
  async execute({ id, name, password }: updateUserDto) {
		const userPrismaRepository = new UserPrismaRepository();
    await userPrismaRepository.update({
      id,
      name,
      password,
    });
  }
}
