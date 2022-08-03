import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";

export interface IRequest {}
export class FindAllByPatientIdUseCase {
  constructor(private repository: IAttendanceRepository) {}

  async execute(patientId: string) {
    const attendances = await this.repository.findAllByPatientId(patientId);

    return attendances;
  }
}
