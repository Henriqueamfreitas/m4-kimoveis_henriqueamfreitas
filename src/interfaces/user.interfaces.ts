import { z } from 'zod';
import { User } from "../entities"
// import { movieCreateSchema } from '../schemas/movie.schema';
import { DeepPartial, Repository } from 'typeorm';

// type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieRead = Array<User>;
type MovieUpdate = DeepPartial<User>;

type UserRepo = Repository<User>

export default UserRepo