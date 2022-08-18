import { Attendance } from "../model/Attendance";

export interface IAttendanceRepository {
  create(patientId: string, userId: string): Promise<void>;
  delete(id: string, userId: string): Promise<void>;
  findAllByUserId(userId: string): Promise<Attendance[]>;
	findAllByPatientId(patientId: string): Promise<Attendance[]>;
	findAllByMonthAndYear({month, year}: findAllByMonthAndYearDto): Promise<Attendance[]>;

}
