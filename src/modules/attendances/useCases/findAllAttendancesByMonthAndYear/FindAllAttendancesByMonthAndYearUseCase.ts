import { Attendance } from "../../model/Attendance";
import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";


export interface IRequest{

}
export class FindAllAttendancesByMonthAndYearUseCase{

	constructor(
		private repository: IAttendanceRepository
	){}

	async execute({month, userId, year}: findAllByMonthAndYearDto): Promise<Attendance[]> {

		
		const attendances = await this.repository.findAllByMonthAndYear({month, userId, year})

		return attendances
	 
	}
}