import { updateUserDto } from "../../model/dto/createUser.dto";
import { IUserRepository } from "../../repositories/IUserRepository";

export interface IRequest {}


export class UpdateUserUseCase {
	constructor(private repository: IUserRepository){}
  async execute({ id, name, password }: updateUserDto) {
		
    await this.repository.update({
      id,
      name,
      password,
    });
  }
}
