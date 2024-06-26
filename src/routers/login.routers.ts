import { Router } from "express"
import "dotenv/config"
import { loginControllers } from "../controllers"

const loginRouter: Router = Router()

loginRouter.post("/", loginControllers.login)

export default { loginRouter }