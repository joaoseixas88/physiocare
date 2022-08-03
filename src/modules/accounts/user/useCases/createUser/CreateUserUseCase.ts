import { createUserDto } from "../../model/dto/createUser.dto";
import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";




export class CreateUserUseCase {

	constructor(private repository: IUserRepository){}

  async execute({ email, password, name }: createUserDto): Promise<User> {

		
    const user = await this.repository.create({ email, password, name });

    return user;
  }
}
