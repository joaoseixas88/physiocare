import { prisma } from "../../../../db/prisma";
import { AppError } from "../../../../error/AppError";
import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../IPatientRepository";

class PatientPrismaRepository implements IPatientRepository {
  async create({
    age,
    name,
    price,
    userId,
  }: createPatientDto): Promise<Patient> {
    const patient = await prisma.patient.create({
      data: {
        age,
        name,
        created_at: new Date(),
        price,
        userId,
      },
    });

    return patient as Patient;
  }
  async findPatientById(id: string): Promise<Patient> {
    const patientExists = await prisma.patient.findUnique({
      where: {
        id,
      },
      include: {
        attendances: true,
      },
    });

    if (!patientExists) throw new AppError("Patient not found", 404);

    console.log(patientExists);

    return patientExists as Patient;
  }

  async findAllByUserId(id: string): Promise<Patient[]> {
    const user = await prisma.user.findUnique({ where: { id }, include: {patients: true} });

		if (!user) throw new AppError("User not found", 404);

		const patients = user.patients

		return patients as Patient[]
		
  }
}

const patientPrismaRepository = new PatientPrismaRepository();

export { PatientPrismaRepository, patientPrismaRepository };
