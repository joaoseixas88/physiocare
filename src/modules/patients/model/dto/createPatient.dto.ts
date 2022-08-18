import { WeekDays } from "../Patient"



export interface createPatientDto {
	name: string
	age: number
	price: number
	userId: string
	weekDays: WeekDays
}

