import { Attendance } from "../../model/Attendance";
import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";


export interface IRequest{

}
export class FindAllAttendancesByUserIdUseCase{

	constructor(
		private repository: IAttendanceRepository
	){}

	async execute(userId: string): Promise<Attendance[]> {
	 const attendances = await this.repository.findAllByUserId(userId)

	 return attendances
	}
}