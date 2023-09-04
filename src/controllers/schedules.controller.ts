import { Schedule } from "../entities"
import { 
    Request, 
    Response 
} from "express"
import { scheduleServices } from "../services"

const create = async (req: Request, res: Response): Promise<Response> => {
    const scheduleCreate: Schedule = req.body 
        
    return res.status(201).json({message: "Schedule created"})
}

const get = async (req: Request, res: Response): Promise<Response> => {
    const realEstate: any = await scheduleServices.get(req.params)

    return res.status(200).json(realEstate)
}

export default { 
    create, 
    get 
}