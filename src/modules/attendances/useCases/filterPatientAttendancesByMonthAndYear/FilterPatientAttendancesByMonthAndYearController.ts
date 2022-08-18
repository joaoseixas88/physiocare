import { Request, Response } from 'express';
import { filterPatientAttendancesByMonthAndYearDto } from '../../model/dto/attendances-dtos';
import { attendancePrismaRepository } from '../../repositories/prisma/AttendancePrismaRepository';
import { FilterPatientAttendancesByMonthAndYearUseCase } from './FilterPatientAttendancesByMonthAndYearUseCase';

export class FilterPatientAttendancesByMonthAndYearController{

	async handle(req: Request, res: Response) {

		const userId = req.user.id
		const { patientId, month, year } = req.body as filterPatientAttendancesByMonthAndYearDto

		const filterPatientAttendancesByMonthAndYearUseCase = new FilterPatientAttendancesByMonthAndYearUseCase(attendancePrismaRepository)

		const result = await filterPatientAttendancesByMonthAndYearUseCase.execute({patientId, month, year})

		return res.status(200).json(result)
	 
	}
}