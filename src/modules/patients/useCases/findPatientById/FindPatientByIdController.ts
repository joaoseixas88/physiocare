import { Request, Response } from "express";
import { patientPrismaRepository } from "../../repositories/prisma/PatientPrismaRepository";
import { FindPatientByIdUseCase } from "./FindPatientByIdUseCase";

export class FindPatientByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const findPatientByIdUseCase = new FindPatientByIdUseCase(
      patientPrismaRepository
    );

    const result = await findPatientByIdUseCase.execute(id);

    return res.status(200).json(result);
  }
}
