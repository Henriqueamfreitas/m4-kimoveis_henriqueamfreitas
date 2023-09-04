import { z } from 'zod'
import { Address } from "../entities"
import { addressSchemas } from '../schemas'
import { Repository } from 'typeorm'

type AddressCreate = z.infer<typeof addressSchemas.addressCreateSchema>

type AddressRepo = Repository<Address>

export { 
    AddressCreate, 
    AddressRepo 
}