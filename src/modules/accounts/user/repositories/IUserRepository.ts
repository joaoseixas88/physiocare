import { createUserDto, updateUserDto } from "../model/dto/createUser.dto";
import { User } from "../model/User";

export interface IUserRepository {
  create(data: createUserDto): Promise<User>;
	update(data: updateUserDto): Promise<void>
}
