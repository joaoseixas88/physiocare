import { Patient } from "../../model/Patient";
import { PatientPrismaRepository } from "../../repositories/prisma/PatientPrismaRepository";

export class CreatePatientUseCase {
  async execute({ age, name, price, userId }: createPatientDto): Promise<Patient> {
    const patientRepository = new PatientPrismaRepository();

    const patient = await patientRepository.create({
      age,
      name,
      price,
      userId,
    });

		return patient
  }
}
