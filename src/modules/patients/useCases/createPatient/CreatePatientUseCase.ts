import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../../repositories/IPatientRepository";

export class CreatePatientUseCase {
  constructor(private repository: IPatientRepository) {}

  async execute({
    age,
    name,
    price,
    userId,
  }: createPatientDto): Promise<Patient> {
    const patient = await this.repository.create({
      age,
      name,
      price,
      userId,
    });

    return patient;
  }
}
