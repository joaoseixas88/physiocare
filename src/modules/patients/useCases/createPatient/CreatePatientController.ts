import { Request, Response } from "express";
import { AppError } from "../../../../error/AppError";
import { patientPrismaRepository } from "../../repositories/prisma/PatientPrismaRepository";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

export class CreatePatientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { age, name, price, weekDays } = req.body;
    const { id: userId } = req.user;

    if (!age || !name || !price || !userId || !weekDays) throw new AppError("Bad request");

    const createPatientUseCase = new CreatePatientUseCase(
      patientPrismaRepository
    );

    const result = await createPatientUseCase.execute({
      age,
      name,
      price,
      userId,
			weekDays
    });

    return res.status(201).json(result);
  }
}
