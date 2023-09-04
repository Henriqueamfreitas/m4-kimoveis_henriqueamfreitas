import { RealEstate } from "../entities"
import { realEstateRepo } from "../repositories"

const create = async (realEstateData: any): Promise<any> => {
    const realEstate: any = realEstateRepo.create(realEstateData)
    const save = await realEstateRepo.save(realEstate)

    return save
}

const get = async (payload:any): Promise<RealEstate[]> => {
    const realEstate: Promise<RealEstate[]> = realEstateRepo.find({ relations: {address: true }})
    
    return realEstate
}


export default { create, get }