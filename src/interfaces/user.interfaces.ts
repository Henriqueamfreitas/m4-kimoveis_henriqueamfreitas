import { z } from 'zod';
import { User } from "../entities"
import { userSchemas } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type UserCreate = z.infer<typeof userSchemas.userCreateSchema>;
type MovieRead = Array<User>;
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>

export {UserRepo, UserUpdate}