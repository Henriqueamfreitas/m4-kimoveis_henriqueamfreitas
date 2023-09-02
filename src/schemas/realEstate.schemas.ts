import { z } from "zod"

const addressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive().int(),
    city: z.string().max(20),
    state: z.string().max(2),
    id: z.number().int()
})

const realEstateSchema = z.object({
    id: z.number().positive().int(),
    size: z.number().int().positive(),
    value: z.number().min(0).refine((num) => {
        const decimalRegex = /^\d{1,10}(\.\d{1,2})?$/;
        return decimalRegex.test(num.toString());
    }).default(0),
    address: addressSchema,
    categoryId: z.number().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
});



const realEstateCreateSchema = realEstateSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true })

const realEstateReturnManySchema = realEstateSchema.array()

export default { realEstateSchema, realEstateCreateSchema }