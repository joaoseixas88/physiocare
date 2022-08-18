import { Router } from "express";
import { GetScheduleController } from "../../../modules/schedule/useCases/getSchedule/GetScheduleController";
import { GetSpecificDayScheduleController } from "../../../modules/schedule/useCases/getSpecificDaySchedule/GetSpecificDayScheduleController";

const scheduleRoutes = Router()
const getScheduleController = new GetScheduleController()
const getSpecificDayScheduleController = new GetSpecificDayScheduleController()

scheduleRoutes.get('/', getScheduleController.handle)
scheduleRoutes.get('/:day', getSpecificDayScheduleController.handle)


export { scheduleRoutes }