import { z } from 'zod';
import { Category } from "../entities"
import { categorySchemas } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type CategoryCreate = z.infer<typeof categorySchemas.categoryCreateSchema>;
type CategoryRead = Array<Category>;
type CategoryUpdate = DeepPartial<Category>;

type CategoryRepo = Repository<Category>

export { CategoryCreate, CategoryRepo }