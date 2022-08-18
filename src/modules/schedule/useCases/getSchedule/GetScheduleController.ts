import { Request, Response } from 'express';
import { schedulePrismaRepository } from '../../repositories/prisma/SchedulePrismaRepository';
import { GetScheduleUseCase } from './GetScheduleUseCase';


export class GetScheduleController{

	async handle(req: Request, res: Response): Promise<Response> {
	 const userId = req.user.id

	 const getScheduleUseCase = new GetScheduleUseCase(schedulePrismaRepository)

	 const result = await getScheduleUseCase.execute(userId)

	 return res.status(200).json(result)
	}
}