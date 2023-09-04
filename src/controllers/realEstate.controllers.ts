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
    let returnArray: any = []
    console.log("realEstate[0].addressId:", realEstate[0].addressId)

    // const testFunction = await realEstate.forEach(async (element: any) => {
    //     const foundAdress: Address | null = await addressRepo.findOneBy({
    //         id: element.addressId
    //     })
    //     // console.log("foundAdress:", foundAdress)
    //     // console.log("element.id:", element.id)
    //     const returnObject = {
    //         Address: foundAdress,
    //         createdAt: element.createdAt,
    //         id: element.id,
    //         size: element.size,
    //         sold: element.sold,
    //         updatedAt: element.updatedAt,
    //         value: element.value,
    //     }
        
    //     returnArray.push(returnObject)
    // });

    // for (const element of realEstate) {
    //     const foundAddress: Address | null = await addressRepo.findOneBy({
    //       id: element.addressId,
    //     });
    
    //     const returnObject = {
    //       Address: foundAddress,
    //       createdAt: element.createdAt,
    //       id: element.id,
    //       size: element.size,
    //       sold: element.sold,
    //       updatedAt: element.updatedAt,
    //       value: element.value,
    //     };
    
    //     returnArray.push(returnObject);
    // }
    return res.status(200).json(returnArray);
}

export default { create, get }