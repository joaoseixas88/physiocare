import { Router } from "express";
import { attendanceRoutes } from "./attendanceRoutes";
import { authRoutes } from "./authRoutes";
import { patientRoutes } from "./patientRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/account", userRoutes);
routes.use("/patient", patientRoutes);
routes.use("/attendance", attendanceRoutes);
routes.use("/auth", authRoutes);

export { routes };
