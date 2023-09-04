import { Router } from "express"
import "dotenv/config"
import { realEstateControllers } from "../controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { ensureTokenIsAdminMiddleWare } from "../middlewares/verify.middlewares"
import { token } from "../middlewares/validateBody.middleware"
import { ensureNoAddressesDuplicatesMiddleWare } from "../middlewares/realEstate.middlewares"

const realEstateRouter: Router = Router()

realEstateRouter.post(
    "",
    token,
    ensureTokenIsAdminMiddleWare,
    ensureNoAddressesDuplicatesMiddleWare,
    // validateBodyMiddleware(realEstateSchemas.realEstateSchema2),
    realEstateControllers.create
)

realEstateRouter.get(
    "",
    realEstateControllers.get
)

export default { realEstateRouter }