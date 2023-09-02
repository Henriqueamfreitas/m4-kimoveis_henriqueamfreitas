import { Router } from "express";
import "dotenv/config";
import { realEstateControllers } from "../controllers";
import { realEstateSchemas } from "../schemas";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { 
    ensureNoEmailDuplicatesMiddleWare, 
    ensureTokenIsAdminMiddleWare, 
    ensureIdExistsMiddleware
} from "../middlewares/verify.middlewares";
import { token } from "../middlewares/validateBody.middleware";
import { ensureNoAddressesDuplicatesMiddleWare } from "../middlewares/realEstate.middlewares";

const realEstateRouter: Router = Router()

realEstateRouter.post(
    '',
    // validateBodyMiddleware(realEstateSchemas.realEstateCreateSchema),
    ensureNoAddressesDuplicatesMiddleWare,
    token,
    ensureTokenIsAdminMiddleWare,
    realEstateControllers.create
)

realEstateRouter.get(
    '',
    realEstateControllers.get
)

export default { realEstateRouter }