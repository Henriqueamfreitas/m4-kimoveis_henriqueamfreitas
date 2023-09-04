import { Request, Response } from "express";
import { Schedule } from "../entities"
import { scheduleServices } from "../services";
import { hash, hashSync } from "bcryptjs";
import { userSchemas } from "../schemas";
import { AppError } from "../errors/error";

const create = async (req: Request, res: Response): Promise<Response> => {
    const scheduleCreate: Schedule = req.body 
    
    const newSchedule = await scheduleServices.create(scheduleCreate)
    
    return res.status(201).json({message: "Schedule created"})
}

const get = async (req: Request, res: Response): Promise<Response> => {
    const realEstate: any = await scheduleServices.get(req.params);

    return res.status(200).json(realEstate);
}

export default { create, get }