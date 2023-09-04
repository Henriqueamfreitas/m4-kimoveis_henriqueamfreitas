import { Category } from "../entities"
import { categoryRepo } from "../repositories"

const create = async (categoryData: Category): Promise<Category> => {
    const category: Category = categoryRepo.create(categoryData)

    const save = await categoryRepo.save(category)

    return save
}

const get = async (payload:any): Promise<Category[]> => {
    const categories: Promise<Category[]> = categoryRepo.find()

    return categories
}

const getRealEstatesFromCategory = async (payload: any): Promise<{ 
  id: number; name: string; realEstate: any; }> => {
    const category: any = await categoryRepo.find({
      where: {
        id: payload.id,
      },
      relations: {
        realEstate: true,
      },
    })
  
    const result = {
      id: category[0].id, 
      name: category[0].name, 
      realEstate: category[0].realEstate, 
    }
  
    return result
}
  
export default { 
  create, 
  get, 
  getRealEstatesFromCategory 
}