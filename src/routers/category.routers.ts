import { Router } from "express";
import "dotenv/config";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { token } from "../middlewares/validateBody.middleware";
import { categoryControllers } from "../controllers";
import { ensureTokenIsAdminMiddleWare } from "../middlewares/verify.middlewares";
import { ensureCategoryIdExistsMiddleWare, ensureNoCategoryDuplicatesMiddleWare } from "../middlewares/category.middlewares";



const categoryRouter: Router = Router()

categoryRouter.post(
    '/',
    ensureNoCategoryDuplicatesMiddleWare,
    token,
    ensureTokenIsAdminMiddleWare,
    categoryControllers.create    
)

categoryRouter.get(
    '', 
    categoryControllers.get
)

categoryRouter.get(
    '/:id/realEstate',
    ensureCategoryIdExistsMiddleWare,
    categoryControllers.getRealEstatesFromCategory
)
export default { categoryRouter }