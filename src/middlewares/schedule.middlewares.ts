import { Request, Response, NextFunction } from "express"
import { Address, RealEstate, Schedule } from "../entities"
import { addressRepo, realEstateRepo, scheduleRepo } from "../repositories"
import { AppError } from "../errors/error"

const ensureNoSchedulesDuplicatesMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundSchedule: Schedule | null = await scheduleRepo.findOne({
        where: {
            date: req.body.date,
            hour: req.body.hour,
            realEstate: { id: req.body.realEstateId },
        }
    })
    if(foundSchedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }


    res.locals = { ...res.locals, foundSchedule };

    return next(); 
}

const ensureUserHasOnlyOneSchedulePerTimeMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const { sub, admin } = res.locals.decoded;
    const userIdFromToken = sub;
    const foundSchedule: Schedule | null = await scheduleRepo.findOne({
        where: {
            date: req.body.date,
            hour: req.body.hour,
            user: { id: userIdFromToken },
        }
    })
    if(foundSchedule) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    res.locals = { ...res.locals, foundSchedule };

    return next(); 
}

const ensureDateIsValidMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const date = new Date(req.body.date).getDay()
    const daysOfTheWeek = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ]
    const day = daysOfTheWeek[date]
    const hour = Number(req.body.hour.substring(0, 2))

    if((hour < 8) || (hour > 18)) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    if(day === "Saturday" ) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    // res.locals = { ...res.locals, foundSchedule };

    return next(); 
}

const ensureRealEstateParamsIdExistsMiddleware = async(    
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id)
    
    const foundRealEstate: RealEstate | null = await realEstateRepo.findOneBy({
        id
    }) 

    if(!foundRealEstate) {
        throw new AppError("RealEstate not found", 404)
    }
    
    return next()
    // res.locals = {...res.locals, foundRealEstate}

}

export { 
    ensureNoSchedulesDuplicatesMiddleWare, 
    ensureUserHasOnlyOneSchedulePerTimeMiddleWare, 
    ensureDateIsValidMiddleWare, 
    ensureRealEstateParamsIdExistsMiddleware
}

