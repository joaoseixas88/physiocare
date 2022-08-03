import { Router } from "express";
import { CreatePatientController } from "../../../modules/patients/useCases/createPatient/CreatePatientController";
import { FindPatientByIdController } from "../../../modules/patients/useCases/findPatientById/FindPatientByIdController";

const createPatientController = new CreatePatientController();
const findPatientByIdController = new FindPatientByIdController()

const patientRoutes = Router();

patientRoutes.post("/create", createPatientController.handle);
patientRoutes.get('/:id',  findPatientByIdController.handle)

export { patientRoutes };
