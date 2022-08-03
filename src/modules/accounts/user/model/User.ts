import { Patient } from "../../../patients/model/Patient";

export interface User {
  id: string;
  email: string;
	name: string
	password: string
	created_at: Date
	patients: Patient[]	
}

