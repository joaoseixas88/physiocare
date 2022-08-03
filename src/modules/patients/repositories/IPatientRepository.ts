import { Patient } from "../model/Patient";

export interface IPatientRepository {
  create({ age, name, price, userId }: createPatientDto): Promise<Patient>;
  findPatientById(id: string): Promise<Patient>;
	findAllByUserId(id: string): Promise<Patient[]>
}
