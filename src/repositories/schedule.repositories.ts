import { AppDataSource } from "../data-source"
import { Schedule } from "../entities";
import { ScheduleRepo } from "../interfaces";

const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

export default scheduleRepo 