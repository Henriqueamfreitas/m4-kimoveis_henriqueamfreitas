import { z } from 'zod';
import { Category } from "../entities"
import { User } from "../entities"
import { userSchemas } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type categoryCreate = z.infer<typeof userSchemas.userCreateSchema>;
type categoryRead = Array<Category>;
type categoryUpdate = DeepPartial<Category>;

type categoryRepo = Repository<Category>

export {}