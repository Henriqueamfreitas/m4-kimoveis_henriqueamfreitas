import { Category } from "../entities"
import { 
    Request, 
    Response 
} from "express"
import { categoryServices } from "../services"

const create = async (req: Request, res: Response): Promise<Response> => {
    const categoryCreate: Category = req.body 
    
    const newCategory = await categoryServices.create(categoryCreate)
    
    return res.status(201).json(newCategory)
}

const get = async (req: Request, res: Response): Promise<Response> => {
    const categories: Category[] = await categoryServices.get(req.query)

    return res.status(200).json(categories)
}

const getRealEstatesFromCategory = async (req: Request, res: Response): Promise<Response> => {
    const categories: Category = await categoryServices.getRealEstatesFromCategory(req.params)

    return res.status(200).json(categories)
}

export default { 
    create, 
    get, 
    getRealEstatesFromCategory 
}