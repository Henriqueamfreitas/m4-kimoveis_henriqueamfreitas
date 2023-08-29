import { AppDataSource } from "../data-source"
import { User } from "../entities";
import { UserRepo } from "../interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User);

export default userRepo 