import { Router } from "express";
import { authenticateUser } from "../../../modules/accounts/auth/authenticateUser";
// import passport from "passport";
// import { jwt } from "../../../middleware/ensureAuthenticated";

const authRoutes = Router();

authRoutes.post("/login", authenticateUser);

export { authRoutes };
