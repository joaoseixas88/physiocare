
export interface IAttendanceRepository{
	create(patientId: string): Promise<void>
	delete(id: string): Promise<void>
}