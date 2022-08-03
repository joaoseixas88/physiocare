import { createUserDto } from "../../model/dto/createUser.dto";
import { User } from "../../model/User";
import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";




export class CreateUserUseCase {
  async execute({ email, password, name }: createUserDto): Promise<User> {
		const userPrismaRepository = new UserPrismaRepository();
    const user = await userPrismaRepository.create({ email, password, name });

    return user;
  }
}
