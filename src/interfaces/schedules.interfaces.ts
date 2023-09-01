import { z } from 'zod';
import { Schedule } from "../entities"
import { schedulesSchemas } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type ScheduleCreate = z.infer<typeof schedulesSchemas.scheduleCreateSchema>;
type ScheduleRead = Array<Schedule>;
type ScheduleUpdate = DeepPartial<Schedule>;

type ScheduleRepo = Repository<Schedule>

export {ScheduleRepo, ScheduleUpdate}