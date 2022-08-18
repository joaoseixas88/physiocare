import { Attendance } from "../../attendances/model/Attendance"

export interface Patient {
	id: string
	name: string
	age: number
	price: number
	created_at: Date
	attendances: Attendance[]
	weekDays: WeekDays
}


interface WeekDays {
	sunday: boolean
	monday: boolean
	tuesday: boolean
	wednesday: boolean
	thursday: boolean
	friday: boolean
	saturday: boolean
}

