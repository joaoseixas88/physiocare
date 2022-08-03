import { Request, Response } from 'express';
import { CreatePatientUseCase } from './CreatePatientUseCase';

export class CreatePatientController{

	async handle(req: Request, res: Response): Promise<Response> {
		const { age, name, price, userId } = req.body 

	 const createPatientUseCase = new CreatePatientUseCase()

		const result = await createPatientUseCase.execute({age, name, price, userId})

		return res.status(201).json(result)
	}
}