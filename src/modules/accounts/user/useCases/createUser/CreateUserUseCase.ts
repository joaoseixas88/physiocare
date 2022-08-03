import { createUserDto } from "../../model/dto/createUser.dto";
import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

interface UserResponse {
  name: string;
  email: string;
}
export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute({
    email,
    password,
    name,
  }: createUserDto): Promise<UserResponse> {
    const passwordHash = await hash(password, 8);

    const user = await this.repository.create({
      email,
      password: passwordHash,
      name,
    });

    const userResponse: UserResponse = {
      name: user.name,
      email: user.email,
    };

    return userResponse;
  }
}
