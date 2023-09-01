import { z } from "zod"

const scheduleSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.date().nullable(),
})

const scheduleCreateSchema = scheduleSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
const scheduleReturnSchema = scheduleSchema.omit({ password: true })
const scheduleReturnManySchema = scheduleReturnSchema.array()
const scheduleUserSchema = scheduleSchema.omit({ admin: true }).partial()

export default { scheduleSchema, scheduleCreateSchema }