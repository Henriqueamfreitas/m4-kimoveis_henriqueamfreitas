import { Router } from "express";
import "dotenv/config";
import { schedulesControllers } from "../controllers";
import { schedulesSchemas } from "../schemas";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { 
    ensureNoEmailDuplicatesMiddleWare, 
    ensureTokenIsAdminMiddleWare, 
    ensureIdExistsMiddleware
} from "../middlewares/verify.middlewares";
import { token } from "../middlewares/validateBody.middleware";
import { ensureRealEstateIdExistsMiddleware } from "../middlewares/realEstate.middlewares";
import { 
    ensureDateIsValidMiddleWare, 
    ensureNoSchedulesDuplicatesMiddleWare, 
    ensureUserHasOnlyOneSchedulePerTimeMiddleWare,
    ensureRealEstateParamsIdExistsMiddleware
} from "../middlewares/schedule.middlewares";

const scheduleRouter: Router = Router()

scheduleRouter.post(
    '', 
    token,
    validateBodyMiddleware(schedulesSchemas.scheduleCreateSchema),
    ensureRealEstateIdExistsMiddleware,
    ensureNoSchedulesDuplicatesMiddleWare,
    ensureUserHasOnlyOneSchedulePerTimeMiddleWare,
    ensureDateIsValidMiddleWare,
    schedulesControllers.create
)

scheduleRouter.get(
    '/realEstate/:id', 
    token,
    ensureTokenIsAdminMiddleWare,
    ensureRealEstateParamsIdExistsMiddleware,
    schedulesControllers.get
)


export default { scheduleRouter }