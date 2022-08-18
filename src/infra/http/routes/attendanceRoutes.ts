import { Router } from "express";
import { CreateAttendanceController } from "../../../modules/attendances/useCases/createAttendance/CreateAttendanceController";
import { DeleteAttendanceController } from "../../../modules/attendances/useCases/deleteAttendance/DeleteAttendanceController";
import { FindAllByPatientIdController } from "../../../modules/attendances/useCases/findAllByPatientId/FindAllByPatientIdController";
import { FindAllAttendancesByUserIdController } from "../../../modules/attendances/useCases/findAllAttendancesByUserId/FindAllAttendancesByUserIdController";
import { FindAllAttendancesByMonthAndYearController } from "../../../modules/attendances/useCases/findAllAttendancesByMonthAndYear/FindAllAttendancesByMonthAndYearController";
import { FilterPatientAttendancesByMonthAndYearController } from "../../../modules/attendances/useCases/filterPatientAttendancesByMonthAndYear/FilterPatientAttendancesByMonthAndYearController";

const createAttendanceController = new CreateAttendanceController();
const deleteAttendanceController = new DeleteAttendanceController();
const findAllAttendancesByPatientIdController = new FindAllByPatientIdController();
const findAllAttendancesByUserIdController = new FindAllAttendancesByUserIdController()
const findAllAttendancesByMonthAndYearController = new FindAllAttendancesByMonthAndYearController()
const filterPatientAttendancesByMonthAndYearController = new FilterPatientAttendancesByMonthAndYearController()

const attendanceRoutes = Router();

attendanceRoutes.get("/all", findAllAttendancesByUserIdController.handle);
attendanceRoutes.get("/all-by-date", findAllAttendancesByMonthAndYearController.handle);
attendanceRoutes.get("/patient-date", filterPatientAttendancesByMonthAndYearController.handle);
attendanceRoutes.post("/:patientId", createAttendanceController.handle);
attendanceRoutes.delete("/:id", deleteAttendanceController.handle);
attendanceRoutes.get("/:patientId", findAllAttendancesByPatientIdController.handle);

export { attendanceRoutes };
