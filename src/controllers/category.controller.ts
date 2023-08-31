import { Request, Response } from "express";
import { User } from "../entities"
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    return res.status(201).json()
}

export default { create }