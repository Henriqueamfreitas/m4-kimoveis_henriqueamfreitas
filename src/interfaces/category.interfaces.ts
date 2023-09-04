import { z } from 'zod'
import { Category } from "../entities"
import { categorySchemas } from '../schemas'
import { Repository } from 'typeorm'

type CategoryCreate = z.infer<typeof categorySchemas.categoryCreateSchema>

type CategoryRepo = Repository<Category>

export { 
    CategoryCreate, 
    CategoryRepo 
}