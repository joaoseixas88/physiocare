import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../../repositories/IPatientRepository";

export interface IRequest {}
export class FindAllByUserIdUseCase {
  constructor(private repository: IPatientRepository) {}

  async execute(id: string): Promise<Patient[]> {
    const patients = await this.repository.findAllByUserId(id);

    return patients;
  }
}
