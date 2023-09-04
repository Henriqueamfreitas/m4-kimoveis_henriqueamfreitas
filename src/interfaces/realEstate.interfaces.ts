import { RealEstate } from "../entities"
import { DeepPartial, Repository } from 'typeorm'

type RealEstateUpdate = DeepPartial<RealEstate>

type RealEstateRepo = Repository<RealEstate>

export {
    RealEstateRepo, 
    RealEstateUpdate
}