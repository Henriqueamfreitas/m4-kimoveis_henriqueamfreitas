import { Category, RealEstate } from "../entities";
import { categoryRepo, realEstateRepo } from "../repositories"

const create = async (categoryData: Category): Promise<any> => {
    const category: Category = categoryRepo.create(categoryData)

    const save = await categoryRepo.save(category)

    return save
}

const get = async (payload:any): Promise<Category[]> => {
    const categories: Promise<Category[]> = categoryRepo.find()

    return categories
}

const getRealEstatesFromCategory = async (payload:any): Promise<any> => {

    const foundRealEstate: RealEstate | null = await realEstateRepo.findOneBy({
        category: payload.params.id
    })


    return foundRealEstate
}

export default { create, get, getRealEstatesFromCategory }