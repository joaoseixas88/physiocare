import { Router } from "express";
import { CreateAttendanceController } from "../../../modules/attendances/useCases/createAttendance/CreateAttendanceController";
import { DeleteAttendanceController } from "../../../modules/attendances/useCases/deleteAttendance/DeleteAttendanceController";
import { FindAllByPatientIdController } from "../../../modules/attendances/useCases/findAllByPatientId/FindAllByPatientIdController";

const createAttendanceController = new CreateAttendanceController();
const deleteAttendanceController = new DeleteAttendanceController();
const findAllByPatientIdController = new FindAllByPatientIdController();

const attendanceRoutes = Router();

attendanceRoutes.post("/:patientId", createAttendanceController.handle);
attendanceRoutes.delete("/:id", deleteAttendanceController.handle);
attendanceRoutes.get("/:patientId", findAllByPatientIdController.handle);

export { attendanceRoutes };
