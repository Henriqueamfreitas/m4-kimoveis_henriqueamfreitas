import { User } from "../entities";
import { userRepo } from "../repositories";

const create = async (userData: User): Promise<any> => {
    const user: User = userRepo.create(userData)
  
    await userRepo.save(user)
  
    return user
}

export default { create }