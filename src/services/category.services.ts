import { Category } from "../entities";
import { categoryRepo } from "../repositories"

const create = async (categoryData: Category): Promise<any> => {
    const category: Category = categoryRepo.create(categoryData)

    const save = await categoryRepo.save(category)

    return save
}


export default { create }