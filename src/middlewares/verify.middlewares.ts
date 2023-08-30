import { Request, Response, NextFunction } from "express"
import { User } from "../entities"
import { userRepo } from "../repositories"
import { AppError } from "../errors/error"

const ensureNoEmailDuplicatesMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundUser: User | null = await userRepo.findOneBy({
        email: req.body.email
    })

    if (foundUser) {
        const error = new AppError("Email already exists", 409)
        return next(error);
    }

    res.locals = { ...res.locals, foundUser };

    return next(); 
}

const ensureTokenIsAdminMiddleWare = ( req: Request, res: Response, next: NextFunction): void => {
    const { sub, admin } = res.locals.decoded
    if(!admin){
        throw new AppError("Insufficient permission", 403)
    }
    
    return next()
}

const ensureIdExistsMiddleware = async(    
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundUser: User | null = await userRepo.findOneBy({
        id: Number(req.params.id)
    }) 
    
    if(!foundUser) {
        const error = new AppError("User not found", 404)
        return next(error)
    }
    
    if(foundUser?.deletedAt !== null){
        const error = new AppError("User already deleted", 404)
        return next(error)
    }
    res.locals = {...res.locals, foundUser}

    return next()
}

export { ensureNoEmailDuplicatesMiddleWare, ensureTokenIsAdminMiddleWare, ensureIdExistsMiddleware }