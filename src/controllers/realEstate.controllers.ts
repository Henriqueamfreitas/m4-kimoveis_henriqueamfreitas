import { Request, Response } from "express";
import { User } from "../entities"
import { userServices } from "../services";
import { hash, hashSync } from "bcryptjs";
import { userSchemas } from "../schemas";
import { AppError } from "../errors/error";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userCreate: User = req.body 
    
    const newUser = await userServices.create(userCreate)
    
    return res.status(201).json(newUser)
}

export default { create }