import { IPatientRepository } from "../../repositories/IPatientRepository";

export interface IRequest {}
export class FindPatientByIdUseCase {
  constructor(private repository: IPatientRepository) {}
  async execute(id: string) {
    const patient = await this.repository.findPatientById(id)

		return patient
  }
}
