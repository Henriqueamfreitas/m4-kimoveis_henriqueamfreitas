import { Request, Response } from "express";
import { User } from "../entities"
import { userServices } from "../services";
import { hashSync } from "bcryptjs";

const create = async (req: Request, res: Response): Promise<Response> => {
    req.body.password = hashSync(req.body.password, 12) 
    const userCreate: User = req.body 

    const newUser = await userServices.create(userCreate)
    
    const userReturn = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        admin: newUser.admin,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
        deletedAt: newUser.deletedAt,
    }
    return res.status(201).json(userReturn)
}

export default { create }