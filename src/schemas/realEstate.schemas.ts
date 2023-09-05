import { z } from "zod"

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().or(z.string()),
    size: z.number().positive().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    address: z.object({    
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive().int(),
        city: z.string().max(20),
        state: z.string().max(2),
    }),
    categoryId: z.number().int(), 
})


export default { 
    realEstateSchema, 
    realEstateCreateSchema 
}