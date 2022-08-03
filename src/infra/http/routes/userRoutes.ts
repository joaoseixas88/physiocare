import { Router } from "express";
import { CreateUserController } from "../../../modules/accounts/user/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../../../modules/accounts/user/useCases/updateUser/UpdateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController()

userRoutes.post("/create", createUserController.handle);
userRoutes.post('/update', updateUserController.handle)

export { userRoutes };
