import { DaySchedule, Schedule } from "../model/Schedule";

export interface IScheduleRepository{
	getSchedule(userId: string): Promise<Schedule>	
	getDaySchedule(userId: string, day: WeekDays): Promise<DaySchedule>

}

export type WeekDays = 'monday' | 'sunday' | 'tuesday' | 'thursday' | 'wednesday' | 'friday' | 'saturday'