import { Request, Response } from "express";
import { attendancePrismaRepository } from "../../repositories/prisma/AttendancePrismaRepository";
import { FindAllByPatientIdUseCase } from "./FindAllByPatientIdUseCase";

export class FindAllByPatientIdController {
  async handle(req: Request, res: Response) {
    const { patientId } = req.params;

    const findAllByPatientIdUseCase = new FindAllByPatientIdUseCase(
      attendancePrismaRepository
    );

    const result = await findAllByPatientIdUseCase.execute(patientId);

    return res.status(200).json(result);
  }
}
