import { User } from "../entities";
import { UserUpdate } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";

const create = async (userData: User): Promise<any> => {
    const user: User = userRepo.create(userData)

    const save = await userRepo.save(user)

    return save
}

const get = async (payload:any): Promise<User[]> => {
    const users: any = userRepo.find()

    return users
}

const destroy = async (user: User): Promise<void> => {
    user.deletedAt = new Date()
    
    await userRepo.save(user)
};
  
const update = async ( user: User, payload: UserUpdate): Promise<User> => {
    return await userRepo.save({ ...user, ...payload });
  };

export default { create, get, destroy, update }