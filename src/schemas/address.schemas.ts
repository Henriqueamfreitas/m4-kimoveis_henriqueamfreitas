import { z } from "zod"

const addressSchema = z.object({    
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive().int(),
    city: z.string().max(20),
    state: z.string().max(2),
    id: z.number().int()
})

const addressCreateSchema = addressSchema.omit({ id: true })

export default { 
    addressSchema, 
    addressCreateSchema 
}