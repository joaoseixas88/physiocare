import { AppError } from "../../../../error/AppError";
import { patientPrismaRepository } from "../../../patients/repositories/prisma/PatientPrismaRepository";
import { FindAllByUserIdUseCase } from "../../../patients/useCases/findAllByUserId/FindAllByUserIdUseCase";
import { DaySchedule, Schedule } from "../../model/Schedule";
import { IScheduleRepository, WeekDays } from "../IScheduleRepository";






const findPatientsUseCase = new FindAllByUserIdUseCase(patientPrismaRepository)

export class SchedulePrismaRepository implements IScheduleRepository {



	async getSchedule(userId: string): Promise<Schedule> {


		const schedule: Schedule = {
			friday: [],
			monday: [],
			saturday: [],
			sunday: [],
			thursday: [],
			tuesday: [],
			wednesday: []
		}

		const patients = await findPatientsUseCase.execute(userId)

		patients.forEach(patient => {

			Object.keys(patient.weekDays).map((key) => {
				const KEY = key as WeekDays
				if (patient.weekDays[KEY]) {
					schedule[KEY].push(patient.name)
				}
			})


		})


		return schedule

	}

	async getDaySchedule(userId: string, day: WeekDays): Promise<DaySchedule> {

		const days = ['monday','sunday','saturday','tuesday','wednesday','thursday','friday']

		if(!days.includes(day)) throw new AppError('Invalid parameters')
		
		const schedule = await this.getSchedule(userId)
		return schedule[day]
	}


}


const schedulePrismaRepository = new SchedulePrismaRepository()

export { schedulePrismaRepository };
