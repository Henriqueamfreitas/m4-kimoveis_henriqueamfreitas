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

export default { create }