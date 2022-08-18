import { Router } from "express";
import { ensureAuthenticated } from "../../../middleware/ensureAuthenticated";
import { CreateUserController } from "../../../modules/accounts/user/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../../../modules/accounts/user/useCases/updateUser/UpdateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController()

userRoutes.post("/create", createUserController.handle);
userRoutes.post('/update', ensureAuthenticated,updateUserController.handle)

export { userRoutes };
