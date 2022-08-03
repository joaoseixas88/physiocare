import { prisma } from "../../../../../db/prisma";
import { AppError } from "../../../../../error/AppError";
import { createUserDto, updateUserDto } from "../../model/dto/createUser.dto";
import { User } from "../../model/User";
import { IUserRepository } from "../IUserRepository";

class UserPrismaRepository implements IUserRepository {
  async create({ email, password, name }: createUserDto): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) throw new AppError("User Already Exists");

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        created_at: new Date(),
      },
    });

    return user as User;
  }

  async update({ id, name, password }: updateUserDto): Promise<void> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
		if(!user) throw new AppError("User not found",404);

		await prisma.user.update({
			where: { id },
			data: { name, password}
		})
  }
}

const userPrismaRepository = new UserPrismaRepository()

export { userPrismaRepository };
