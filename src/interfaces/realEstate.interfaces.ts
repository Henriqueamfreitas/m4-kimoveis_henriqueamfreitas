import { z } from 'zod';
import { RealEstate } from "../entities"
import { realEstateSchemas } from "../schemas"
import { DeepPartial, Repository } from 'typeorm';

type RealEstateCreate = z.infer<typeof realEstateSchemas.realEstateCreateSchema>;
type RealEstateRead = Array<RealEstate>;
type RealEstateUpdate = DeepPartial<RealEstate>;

type RealEstateRepo = Repository<RealEstate>

export {RealEstateRepo, RealEstateUpdate}