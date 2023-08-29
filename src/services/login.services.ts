import { compareSync } from "bcryptjs"
import { AppError } from "../errors/error"
import { userRepo } from "../repositories"
import { User } from "../entities"
import { sign } from "jsonwebtoken"

const login = async (payload: any): Promise<any> => {
    const { email, password } = payload

    const user: User | null = await userRepo.findOne({ where: { email } })

    if(user === null){
        throw new AppError("Invalid credentials", 401)
    }

    const passwordIsValid: boolean = compareSync(password, user.password) 

    if(!passwordIsValid){
        throw new AppError("Invalid credentials", 401)
    }


    const token = sign({
        email: user.email, admin: user.admin
    }, String(process.env.SECRET_KEY), {
        expiresIn: process.env.EXPIRES_IN, subject: String(user.id)
    })

    return token 
}

export default {login}