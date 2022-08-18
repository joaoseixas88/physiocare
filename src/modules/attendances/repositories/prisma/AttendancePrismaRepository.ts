import { prisma } from "../../../../db/prisma";
import { AppError } from "../../../../error/AppError";
import { Attendance } from "../../model/Attendance";
import { IAttendanceRepository } from "../IAttendanceRepository";

class AttendancePrismaRepository implements IAttendanceRepository {
	async create(patientId: string, userId: string): Promise<void> {
		const patientExists = await prisma.patient.findUnique({
			where: { id: patientId },
			include: { user: true },
		});
		if (patientExists?.userId !== userId) throw new AppError('You can not create an attendance to a patient that is not yours',401)
		if (!patientExists) throw new AppError("Patient not found", 404);
		await prisma.attendances.create({
			data: {
				patientId,
				created_at: new Date(),
			},
		});
	}

	async delete(id: string, userId: string): Promise<void> {

		const attendanceExists = await prisma.attendances.findUnique({
			where: { id },
		});

		if (!attendanceExists)
			throw new AppError("Attendance does not exists", 404);

		const isPatientFromThisUser = await prisma.patient.findUnique({
			where: { id: attendanceExists.patientId as string}
		})

		console.log(isPatientFromThisUser)

		if(isPatientFromThisUser?.userId !== userId) throw new AppError('You can not delete an attendance from a patient that is not yours',401)

		await prisma.attendances.delete({ where: { id } });
	}

	async findAllByPatientId(patientId: string): Promise<Attendance[]> {
		const patientExists = await prisma.patient.findUnique({
			where: { id: patientId },
		});

		if (!patientExists) throw new AppError("Patient not found", 404);

		const attendances = await prisma.attendances.findMany({
			where: { patientId },
		});

		if (!attendances)
			throw new AppError("Invalid id or Patient Don`t exist", 404);

		return attendances as Attendance[];
	}
}

const attendancePrismaRepository = new AttendancePrismaRepository();

export { attendancePrismaRepository };
