import { Request, Response } from 'express';
import { attendancePrismaRepository } from '../../repositories/prisma/AttendancePrismaRepository';
import { FindAllAttendancesByUserIdUseCase } from './FindAllAttendancesByUserIdUseCase';

export class FindAllAttendancesByUserIdController{

	async handle(req: Request, res: Response) {
	 const { id } = req.user

	 const findAllByUserIdUseCase = new FindAllAttendancesByUserIdUseCase(attendancePrismaRepository)

	 const result = await findAllByUserIdUseCase.execute(id)

	 return res.status(200).json(result)
	}
}