import { Request, Response } from 'express';
import { attendancePrismaRepository } from '../../repositories/prisma/AttendancePrismaRepository';
import { DeleteAttendanceUseCase } from './DeleteAttendanceUseCase';

export class DeleteAttendanceController{

	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
	 const deleteAttendanceUseCase = new DeleteAttendanceUseCase(attendancePrismaRepository)

	 await deleteAttendanceUseCase.execute(id)

	 return res.status(201).send()
	}
}