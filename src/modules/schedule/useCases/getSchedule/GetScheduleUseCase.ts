import { IScheduleRepository } from "../../repositories/IScheduleRepository";


export interface IRequest {

}
export class GetScheduleUseCase {

	constructor(
		private repository: IScheduleRepository
	) {}

	async execute(userId: string) {
		const schedule = this.repository.getSchedule(userId)
		return schedule

	}
}