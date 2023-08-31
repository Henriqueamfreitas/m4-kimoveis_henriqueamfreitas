import { Router } from "express";
import "dotenv/config";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { token } from "../middlewares/validateBody.middleware";
import { categoryControllers } from "../controllers";



const categoryRouter: Router = Router()

export default { categoryRouter }