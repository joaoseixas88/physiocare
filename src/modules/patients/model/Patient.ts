import { Attendance } from "../../attendances/model/Attendance"

export interface Patient{
	id: string
	name: string
	age: number
	price: number
	created_at: Date
	attendances: Attendance[]
	userId: string	
}


