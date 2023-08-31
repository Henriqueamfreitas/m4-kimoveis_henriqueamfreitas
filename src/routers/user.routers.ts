import { Router } from "express";
import "dotenv/config";
import { userControllers } from "../controllers";
import { userSchemas } from "../schemas";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { 
    ensureNoEmailDuplicatesMiddleWare, 
    ensureTokenIsAdminMiddleWare, 
    ensureIdExistsMiddleware
} from "../middlewares/verify.middlewares";
import { token } from "../middlewares/validateBody.middleware";

const userRouter: Router = Router()

userRouter.post(
    '', 
    validateBodyMiddleware(userSchemas.userCreateSchema),
    ensureNoEmailDuplicatesMiddleWare,
    userControllers.create
)

userRouter.get(
    '',
    token,
    ensureTokenIsAdminMiddleWare,
    userControllers.get
)

userRouter.use("/:id", ensureIdExistsMiddleware)

userRouter.delete(
    '/:id',
    token,
    ensureTokenIsAdminMiddleWare,
    userControllers.destroy
)

userRouter.patch(
    '/:id',
    token,
    validateBodyMiddleware(userSchemas.updateUserSchema),
    ensureTokenIsAdminMiddleWare,
    userControllers.update
)

export default { userRouter }