import { Request, Response, NextFunction } from "express"
import { Address } from "../entities"
import { addressRepo } from "../repositories"
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

export { ensureNoAddressesDuplicatesMiddleWare }