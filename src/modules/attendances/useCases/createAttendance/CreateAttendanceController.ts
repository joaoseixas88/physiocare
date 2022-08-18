import { Request, Response } from "express";
import { attendancePrismaRepository } from "../../repositories/prisma/AttendancePrismaRepository";
import { CreateAttendanceUseCase } from "./CreateAttendanceUseCase";

export class CreateAttendanceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const { patientId } = req.params;

    const createAttendanceUseCase = new CreateAttendanceUseCase(
      attendancePrismaRepository
    );

    await createAttendanceUseCase.execute(patientId,userId);

    return res.status(201).send();
  }
}
