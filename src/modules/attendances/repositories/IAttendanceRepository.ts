import { Attendance } from "../model/Attendance"

export interface IAttendanceRepository{
	create(patientId: string): Promise<void>
	delete(id: string): Promise<void>
	findAllByPatientId(patientId: string): Promise<Attendance[]>
}