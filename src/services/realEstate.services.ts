import { RealEstate } from "../entities";
import { AppError } from "../errors/error";
import { UserUpdate } from "../interfaces/user.interfaces";
import { realEstateRepo } from "../repositories";
import { userSchemas } from "../schemas";

const create = async (realEstateData: any): Promise<any> => {
    const realEstate: any = realEstateRepo.create(realEstateData)
    const save = await realEstateRepo.save(realEstate)

    return save
}

const get = async (payload:any): Promise<RealEstate[]> => {
    const realEstate: Promise<RealEstate[]> = realEstateRepo.find()
    
    return realEstate
}


export default { create, get }