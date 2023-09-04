import { Request, Response, NextFunction } from "express"
import { Address, RealEstate } from "../entities"
import { addressRepo, realEstateRepo } from "../repositories"
import { AppError } from "../errors/error"

const ensureNoAddressesDuplicatesMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundAddress: Address | null = await addressRepo.findOneBy({
        street: req.body.address.street,
        zipCode: req.body.address.zipCode,
        number: req.body.address.number,
        city: req.body.address.city,
        state: req.body.address.state,
    })

    if (foundAddress) {
        const error = new AppError("Address already exists", 409)
        return next(error);
    }

    res.locals = { ...res.locals, foundAddress };

    return next(); 
}

const ensureRealEstateIdExistsMiddleware = async(    
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.body.realEstateId)
    
    const foundRealEstate: RealEstate | null = await realEstateRepo.findOneBy({
        id
    }) 
    
    if(!foundRealEstate) {
        throw new AppError("RealEstate not found", 404)
    }

    res.locals = {...res.locals, foundRealEstate}

    return next()
}

export { ensureNoAddressesDuplicatesMiddleWare, ensureRealEstateIdExistsMiddleware }