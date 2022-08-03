import { prisma } from "../../../../db/prisma";
import { AppError } from "../../../../error/AppError";
import { IAttendanceRepository } from "../IAttendanceRepository";

class AttendancePrismaRepository implements IAttendanceRepository {
  async create(patientId: string): Promise<void> {
    const patientExists = await prisma.patient.findUnique({
      where: { id: patientId },
    });
    if (!patientExists) throw new AppError("Patient not found", 404);
    await prisma.attendances.create({
      data: {
        patientId,
        created_at: new Date(),
      },
    });
  }

  async delete(id: string): Promise<void> {
    const attendanceExists = await prisma.attendances.findUnique({
      where: { id },
    });

    if (!attendanceExists)
      throw new AppError("Attendance does not exists", 404);

    await prisma.attendances.delete({ where: { id } });
  }
}

const attendancePrismaRepository = new AttendancePrismaRepository()

export { attendancePrismaRepository };
