import { loginServices } from "../services"
import { 
    Request, 
    Response 
} from "express"
import { iToken } from "../interfaces/login.interfaces"


const login = async (req: Request, res: Response): Promise<Response> => {
    const token: iToken = await loginServices.login(req.body) 
    
    const emailLogged = req.body.email
    res.locals = { ...res.locals, emailLogged }

    return res.status(200).json({ token })
};

export default { login }