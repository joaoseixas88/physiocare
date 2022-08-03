import { Request, Response } from "express";
import { attendancePrismaRepository } from "../../repositories/prisma/AttendancePrismaRepository";
import { CreateAttendanceUseCase } from "./CreateAttendanceUseCase";

export class CreateAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { patientId } = req.params;

    const createAttendanceUseCase = new CreateAttendanceUseCase(attendancePrismaRepository);

    await createAttendanceUseCase.execute(patientId);

    return res.status(201).send();
  }
}
