import { patient } from "@prisma/client";
import { createPatientDto } from "../../model/dto/createPatient.dto";
import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../../repositories/IPatientRepository";

export class CreatePatientUseCase {
  constructor(private repository: IPatientRepository) {}

  async execute({
    age,
    name,
    price,
    userId,
		weekDays
  }: createPatientDto): Promise<Patient> {
    const patient = await this.repository.create({
      age,
      name,
      price,
      userId,
			weekDays
    });

    return patient;
  }
}
