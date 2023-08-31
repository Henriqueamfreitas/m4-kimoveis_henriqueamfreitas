import { Request, Response } from "express";
import { Category } from "../entities"
import { categoryServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const categoryCreate: Category = req.body 
    
    const newCategory = await categoryServices.create(categoryCreate)
    
    return res.status(201).json(newCategory)
}

export default { create }