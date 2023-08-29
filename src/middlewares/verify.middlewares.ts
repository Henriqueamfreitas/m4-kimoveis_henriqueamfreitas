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

export { ensureNoEmailDuplicatesMiddleWare }