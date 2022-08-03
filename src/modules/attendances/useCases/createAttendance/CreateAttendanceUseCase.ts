import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";

export class CreateAttendanceUseCase {
  constructor(private repository: IAttendanceRepository) {}
  async execute(patientId: string) {
    await this.repository.create(patientId);
  }
}
