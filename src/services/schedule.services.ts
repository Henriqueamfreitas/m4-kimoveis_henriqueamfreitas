import { User } from "../entities";
import { AppError } from "../errors/error";
import { UserUpdate } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import { userSchemas } from "../schemas";

const create = async (userData: User): Promise<any> => {
    const user: User = userRepo.create(userData)

    const save = await userRepo.save(user)

    return save
}

export default { create }