import { patient } from "@prisma/client";
import { prisma } from "../../../../db/prisma";
import { AppError } from "../../../../error/AppError";
import { Attendance } from "../../../attendances/model/Attendance";
import { createPatientDto } from "../../model/dto/createPatient.dto";
import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../IPatientRepository";

class PatientPrismaRepository implements IPatientRepository {
	async create({
		age,
		name,
		price,
		userId,
		weekDays
	}: createPatientDto): Promise<Patient> {
		const userExists = await prisma.user.findUnique({ where: { id: userId } });

		if (!userExists) throw new AppError("User not found", 404);

		const patient = await prisma.patient.create({
			data: {
				age,
				name,
				created_at: new Date(),
				price,
				userId,
				weekDays: JSON.stringify(weekDays)
			},
		});

		const formattedPatient: Patient = {
			...patient,
			weekDays: JSON.parse(patient.weekDays),
			attendances: []

		}


		return formattedPatient
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

		const formattedPatient: Patient = {
			...patientExists,
			weekDays: JSON.parse(patientExists.weekDays),
			attendances: patientExists.attendances as Attendance[]		

		}

		return formattedPatient
	}

	async findAllByUserId(id: string): Promise<Patient[]> {
		const user = await prisma.user.findUnique({
			where: { id },
			select: {
				patients: {
					include: {
						attendances: true,
					},
				},
			},
		});

		if (!user) throw new AppError("User not found", 404);


		user

		const patients = user.patients;
		const formattedPatients = patients.map(patient => {
			return {
				...patient,
				weekDays: JSON.parse(patient.weekDays),
				attendances: patient.attendances as Attendance[]
			}
		})



		return formattedPatients
	}
}

const patientPrismaRepository = new PatientPrismaRepository();

export { patientPrismaRepository };
