import { Request, Response } from "express";
import { patientPrismaRepository } from "../../repositories/prisma/PatientPrismaRepository";
import { FindAllByUserIdUseCase } from "./FindAllByUserIdUseCase";

export class FindAllByUserIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const findAllByUserIdUseCase = new FindAllByUserIdUseCase(
      patientPrismaRepository
    );

    const patients = await findAllByUserIdUseCase.execute(id);

    return res.status(200).json(patients);
  }
}
