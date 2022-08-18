import { Request, Response } from 'express';
import { attendancePrismaRepository } from '../../repositories/prisma/AttendancePrismaRepository';
import { FindAllAttendancesByMonthAndYearUseCase } from './FindAllAttendancesByMonthAndYearUseCase';

export class FindAllAttendancesByMonthAndYearController {

	async handle(req: Request, res: Response) {

		const userId = req.user.id
		const { month, year } = req.body as findAllByMonthAndYearDto		

		const findAllAttendancesByMonthAndYearUseCase = new FindAllAttendancesByMonthAndYearUseCase(attendancePrismaRepository)

		const result = await findAllAttendancesByMonthAndYearUseCase.execute({month, year, userId})

		return res.status(200).json(result)

	}
}