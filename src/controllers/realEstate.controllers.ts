import { Request, Response } from "express";
import { Address, Category, RealEstate } from "../entities"
import { realEstateServices } from "../services";
import { hash, hashSync } from "bcryptjs";
import { realEstateSchemas, userSchemas } from "../schemas";
import { AppError } from "../errors/error";
import { addressRepo, categoryRepo } from "../repositories";

const create = async (req: Request, res: Response): Promise<Response> => {
    const foundCategory: Category | null = await categoryRepo.findOneBy({
        id: req.body.categoryId
    })

    const categoryObject = {
        id: foundCategory?.id,
        name: foundCategory?.name
    }

    const addressCreateObject = {
        street: req.body.address.street,
        zipCode: req.body.address.zipCode,
        number: req.body.address.number,
        city: req.body.address.city,
        state: req.body.address.state,
    }

    const address: any = addressRepo.create(addressCreateObject)
    const save = await addressRepo.save(address)
        
    const returnRealEstate = {
        address: save,
        category: categoryObject,
        size: req.body.size,
        value: req.body.value,
    }
    const newRealEstate = await realEstateServices.create(returnRealEstate)
        
    return res.status(201).json(newRealEstate)
}

const get = async (req: Request, res: Response): Promise<any> => {
    const realEstate: any = await realEstateServices.get(req)
    return res.status(200).json(realEstate);
}

export default { create, get }