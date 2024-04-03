import { z } from 'zod';
//https://youtu.be/NmkY4JgS21A?t=6513

export const registerSchema = z.object({
    username: z.string(
        { required_error: 'Debe especificar el usuario' }
        ).min(3).max(30),
    email: z.string({ required_error: 'Debe especificar el email'}).email({ required_error: 'Debe especificar el email'}),
    password: z.string({ required_error: 'Debe especificar la contraseña' }).min(6, { required_error: 'La contraseña debe tener al menos 6 caracteres' }),
})

export const loginSchema = z.object({
    email: z.string({ required_error: 'Debe especificar el email' }).email( { required_error: 'Debe especificar el email' } ),
    password: z.string( { required_error: 'Debe especificar la contraseña' } ).min(6),
})
