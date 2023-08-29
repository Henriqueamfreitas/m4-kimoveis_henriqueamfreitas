import { Router } from "express";
import "dotenv/config";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { loginControllers } from "../controllers";

const loginRouter: Router = Router()

loginRouter.post('/', loginControllers.login)

export default { loginRouter }