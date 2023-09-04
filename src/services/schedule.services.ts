import { RealEstate, Schedule } from "../entities";
import { AppError } from "../errors/error";
import { UserUpdate } from "../interfaces/user.interfaces";
import { realEstateRepo, scheduleRepo } from "../repositories";
import { userSchemas } from "../schemas";

const create = async (scheduleData: Schedule): Promise<any> => {
    const schedule: Schedule = scheduleRepo.create(scheduleData)

    const save = await scheduleRepo.save(schedule)

    return save
}

const get = async (payload: any): Promise<any> => {
    const realEstateId = payload.id;
    
    const realEstate: Promise<RealEstate[]> = realEstateRepo.find({ 
        where: { id: realEstateId }, 
        relations: {
            address: true, 
            category: true, 
            schedules: true
        }
    });

    const schedule: Promise<Schedule[]> = scheduleRepo.find({ 
        where: { realEstate: { id: realEstateId } }, 
        relations: {
            user: true, 
        }
    })

    const realEstateData = await realEstate;
    const realEstateItem = realEstateData[0]; // Pegue o primeiro item da matriz

    if (realEstateItem) {
        realEstateItem.schedules = await schedule;
    }

    return realEstateItem;
}

export default { create, get }