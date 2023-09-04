import { z } from "zod"
import categorySchemas from "./category.schemas";

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
    // categoryId: categorySchemas.categorySchema,
    categoryId: z.number().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
});

const realEstateSchema2 = z.object({
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive().int(),
        city: z.string().max(20),
        state: z.string().max(2),
        id: z.number().int()
    }),
    size: z.number().min(0.1), // Definimos que "size" deve ser um número maior ou igual a 0.1.
    categoryId: z.number().int(),
    value: z.number(), // Definimos que "value" deve ser um número, mas não especificamos restrições adicionais neste exemplo.
  });


const realEstateCreateSchema = realEstateSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true })

const realEstateReturnManySchema = realEstateSchema.array()

export default { realEstateSchema, realEstateCreateSchema, realEstateSchema2 }