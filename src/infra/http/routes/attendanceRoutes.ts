import { Router } from "express";
import { CreateAttendanceController } from "../../../modules/attendances/useCases/createAttendance/CreateAttendanceController";
import { DeleteAttendanceController } from "../../../modules/attendances/useCases/deleteAttendance/DeleteAttendanceController";

const createAttendanceController = new CreateAttendanceController();
const deleteAttendanceController = new DeleteAttendanceController()

const attendanceRoutes = Router();

attendanceRoutes.post("/:patientId", createAttendanceController.handle);
attendanceRoutes.delete("/:id", deleteAttendanceController.handle);

export { attendanceRoutes };
