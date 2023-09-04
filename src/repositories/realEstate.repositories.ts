import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"
import { RealEstateRepo } from "../interfaces"

const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)

export default realEstateRepo 