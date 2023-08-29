import { z } from "zod"

const isEmail = (value: string) => {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return emailRegex.test(value);
};

const userSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().max(45),
    email: z.string().refine(isEmail, {
        message: "Invalid email",
    }),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
})

const userCreateSchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
const userReturnSchema = userSchema.omit({ password: true })
const userReturnManySchema = userSchema.array()
const updateUserSchema = userSchema.partial()

export default { userSchema, userCreateSchema }