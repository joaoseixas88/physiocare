import { IAttendanceRepository } from "../../repositories/IAttendanceRepository";

export interface IRequest {}
export class DeleteAttendanceUseCase {
  constructor(private repository: IAttendanceRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
