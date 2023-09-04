import { AppDataSource } from "../data-source"
import { Address } from "../entities"
import { AddressRepo } from "../interfaces"

const addressRepo: AddressRepo = AppDataSource.getRepository(Address)

export default addressRepo