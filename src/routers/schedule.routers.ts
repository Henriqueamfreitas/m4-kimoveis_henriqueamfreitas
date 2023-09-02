import { Router } from "express";
import "dotenv/config";
import { schedulesControllers } from "../controllers";
import { userSchemas } from "../schemas";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { 
    ensureNoEmailDuplicatesMiddleWare, 
    ensureTokenIsAdminMiddleWare, 
    ensureIdExistsMiddleware
} from "../middlewares/verify.middlewares";
import { token } from "../middlewares/validateBody.middleware";

const scheduleRouter: Router = Router()

scheduleRouter.post(
    '', 
    schedulesControllers.create
)


export default { scheduleRouter }