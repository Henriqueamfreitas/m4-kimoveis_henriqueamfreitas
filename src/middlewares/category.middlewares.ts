import { Request, Response, NextFunction } from "express"
import { Category } from "../entities"
import { categoryRepo } from "../repositories"
import { AppError } from "../errors/error"

const ensureNoCategoryDuplicatesMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundCategory: Category | null = await categoryRepo.findOneBy({
        name: req.body.name
    })

    if (foundCategory) {
        const error = new AppError("Category already exists", 409)
        return next(error);
    }

    res.locals = { ...res.locals, foundCategory };

    return next(); 
}

const ensureCategoryIdExistsMiddleWare = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    const foundCategory: Category | null = await categoryRepo.findOneBy({
        id: Number(req.params.id)
    })

    console.log(foundCategory)
    if (!foundCategory) {
        const error = new AppError("Category not found", 404)
        return next(error);
    }

    res.locals = { ...res.locals, foundCategory };

    return next(); 
}

export { 
    ensureNoCategoryDuplicatesMiddleWare, 
    ensureCategoryIdExistsMiddleWare
}