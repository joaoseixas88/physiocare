import { Router } from "express";
import { CreatePatientController } from "../../../modules/patients/useCases/createPatient/CreatePatientController";
import { FindAllByUserIdController } from "../../../modules/patients/useCases/findAllByUserId/FindAllByUserIdController";
import { FindPatientByIdController } from "../../../modules/patients/useCases/findPatientById/FindPatientByIdController";

const createPatientController = new CreatePatientController();
const findPatientByIdController = new FindPatientByIdController()
const findAllByUserIdController = new FindAllByUserIdController()

const patientRoutes = Router();

patientRoutes.post("/create", createPatientController.handle);
patientRoutes.get('/:id',  findPatientByIdController.handle)
patientRoutes.get('/all/:id', findAllByUserIdController.handle)

export { patientRoutes };
