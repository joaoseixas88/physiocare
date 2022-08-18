import { Attendance } from "../../model/Attendance";
import { filterPatientAttendancesByMonthAndYearDto } from "../../model/dto/attendances-dtos";
import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";


export interface IRequest{

}
export class FilterPatientAttendancesByMonthAndYearUseCase{

	constructor(
		private repository: IAttendanceRepository
	) {}

	async execute({month, patientId, year}: filterPatientAttendancesByMonthAndYearDto): Promise<Attendance[]> {
	 const attendances = await this.repository.filterPatientAttendancesByMonthAndYear({month, patientId, year})

	 return attendances 
	}
}