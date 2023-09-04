import { Schedule } from "../entities"
import { DeepPartial, Repository } from 'typeorm'

type ScheduleUpdate = DeepPartial<Schedule>

type ScheduleRepo = Repository<Schedule>

export {
    ScheduleRepo, 
    ScheduleUpdate
}