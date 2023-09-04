import { Schedule } from "../entities";
import { AppError } from "../errors/error";
import { UserUpdate } from "../interfaces/user.interfaces";
import { scheduleRepo } from "../repositories";
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
    console.log(foundRealEstate)

    return foundRealEstate
}

export default { create, get }