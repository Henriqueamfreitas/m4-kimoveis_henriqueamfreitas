import { Request, Response } from "express";
import { User } from "../entities"
import { userServices } from "../services";
import { hash, hashSync } from "bcryptjs";

const create = async (req: Request, res: Response): Promise<Response> => {
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

const get = async (req: Request, res: Response): Promise<Response> => {
    const users: User[] = await userServices.get(req.query);

    const usersWithoutPassword = users.map(user => {
        const createdAt: Date = new Date(user.createdAt);
        const updatedAt: Date = new Date(user.updatedAt);

        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            createdAt,
            updatedAt,
            deletedAt: user.deletedAt,
        };
        return userWithoutPassword;
    })

    return res.status(200).json(usersWithoutPassword);
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroy(res.locals.foundUser);
    return res.status(204).json();
};
  
  
const update = async (
req: Request,
res: Response
): Promise<Response> => {
    const { foundUser } = res.locals;
    const { body } = req;
  
    const user: User = await userServices.update(foundUser, body);
  
    return res.status(200).json(user);
};

export default { create, get, destroy, update }