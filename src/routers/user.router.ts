import { Router } from "express";
import "dotenv/config";
import { userControllers } from "../controllers";
import { userSchemas } from "../schemas";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { ensureNoEmailDuplicatesMiddleWare } from "../middlewares/verify.middlewares";

const userRouter: Router = Router()

userRouter.post(
    '', 
    validateBodyMiddleware(userSchemas.userCreateSchema),
    ensureNoEmailDuplicatesMiddleWare,
    userControllers.create
)

export default userRouter 