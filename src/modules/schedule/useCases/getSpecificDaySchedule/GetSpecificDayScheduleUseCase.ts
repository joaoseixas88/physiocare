import { IScheduleRepository, WeekDays } from "../../repositories/IScheduleRepository";


export interface IRequest{

}
export class GetSpecificDayScheduleUseCase{

	constructor(
		private repository: IScheduleRepository
	){}

	async execute(userId: string, day: WeekDays) {
	 const daySchedule = await this.repository.getDaySchedule(userId, day)

	 return daySchedule
	}

	
}