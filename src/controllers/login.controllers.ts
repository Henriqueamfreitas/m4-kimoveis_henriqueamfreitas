import { Request, Response } from "express"
import { loginServices } from "../services";
import { iToken } from "../interfaces/login.interfaces"


const login = async (req: Request, res: Response): Promise<Response> => {
    const token: iToken = await loginServices.login(req.body) 
    
    const emailLogged = req.body.email
    // console.log(emailLogged)
    res.locals = { ...res.locals, emailLogged };

    return res.status(200).json({ token })
};

export default { login }