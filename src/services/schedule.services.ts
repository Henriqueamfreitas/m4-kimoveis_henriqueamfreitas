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

const get = async (payload:any): Promise<any[]> => {
    const realEstateId = payload.id
    const foundRealEstate: any | null = await scheduleRepo.findOne({
        where: {
            realEstate: { id: realEstateId },
        }
    })
    const realEstate: Promise<RealEstate[]> = realEstateRepo.find({ 
        relations: {
            address: true, 
            category: true, 
        }
    })

    const schedule: Promise<Schedule[]> = scheduleRepo.find({ 
        relations: {
            user: true, 
            realEstate: true 
        }
    })

    console.log("schedule:", await schedule)
    console.log("realEstate:", await realEstate)
    return realEstate
}

export default { create, get }