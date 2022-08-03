import { Router } from "express";
import { attendanceRoutes } from "./attendanceRoutes";
import { patientRoutes } from "./patientRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use('/account',userRoutes)
routes.use('/patient',patientRoutes)
routes.use('/attendance', attendanceRoutes)

export { routes };
