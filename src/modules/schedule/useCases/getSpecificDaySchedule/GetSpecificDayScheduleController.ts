import { Request, Response } from 'express';
import { WeekDays } from '../../repositories/IScheduleRepository';
import { schedulePrismaRepository, SchedulePrismaRepository } from '../../repositories/prisma/SchedulePrismaRepository';
import { GetSpecificDayScheduleUseCase } from './GetSpecificDayScheduleUseCase';

export class GetSpecificDayScheduleController {

	async handle(req: Request, res: Response) {
		const userId = req.user.id
		const { day } = req.params

		const weekDay = day as WeekDays



		const getSpecificDayScheduleUseCase = new GetSpecificDayScheduleUseCase(schedulePrismaRepository)

		const result = await getSpecificDayScheduleUseCase.execute(userId, weekDay)

		return res.status(200).json(result)

	}
}