import { User } from "../entities"
import { DeepPartial, Repository } from 'typeorm'

type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>

export {
    UserRepo, 
    UserUpdate
}