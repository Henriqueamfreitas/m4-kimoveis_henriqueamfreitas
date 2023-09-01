import { z } from "zod"

const adressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive().int(),
    city: z.string().max(20),
    state: z.string().max(2),
})


const realEstateSchema = z.object({
    id: z.number().positive().int(),
    value: z.number().min(0).refine((num) => {
        // Validação personalizada para verificar se o número é decimal com precisão 12 e escala 2.
        // Você pode ajustar essa validação de acordo com seus requisitos específicos.
        const decimalRegex = /^\d{1,10}(\.\d{1,2})?$/;
        return decimalRegex.test(num.toString());
    }).default(0),
    adressSchema,
    categoryId: z.number().positive().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
});

const realEstateCreateSchema = realEstateSchema.omit({ id: true })

const realEstateReturnManySchema = realEstateSchema.array()

export default { realEstateSchema, realEstateCreateSchema }