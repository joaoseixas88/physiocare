import { Router } from "express";
import { ensureAuthenticated } from "../../../middleware/ensureAuthenticated";
import { attendanceRoutes } from "./attendanceRoutes";
import { authRoutes } from "./authRoutes";
import { patientRoutes } from "./patientRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/account", userRoutes);
routes.use("/patient", ensureAuthenticated, patientRoutes);
routes.use("/attendance", ensureAuthenticated, attendanceRoutes);
routes.use("/auth", authRoutes);

export { routes };
