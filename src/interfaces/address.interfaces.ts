import { z } from 'zod';
import { Address } from "../entities"
import { addressSchemas } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type AddressCreate = z.infer<typeof addressSchemas.addressCreateSchema>;
type AddressRead = Array<Address>;
type AddressUpdate = DeepPartial<Address>;

type AddressRepo = Repository<Address>

export { AddressCreate, AddressRepo }