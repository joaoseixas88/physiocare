import { Attendance } from "../model/Attendance";

export interface IAttendanceRepository {
  create(patientId: string, userId: string): Promise<void>;
  delete(id: string, userId: string): Promise<void>;
  findAllByPatientId(patientId: string): Promise<Attendance[]>;
}
