import {z} from 'zod';


export const userSchema = z.object({
    username: z
        .string({required_error: "Username is required"})
        .min(3, {message: "Username must be at least 3 characters"})
        .trim(30, {message: "Username cannot exceed 30 characters"}),
    email: z
        .string({ required_error: "Email is required"})
        .toLowerCase(),
        .email({ message; "Invalid email address"}),
    password: z
        .string({ required_error: "Password is required"})
        .min(8, {message: "Password must be at least 8 characters"})
        .regex(/[A-Z]/, {message: "Password must contain at least one uppercase"})
        .regex(/[a-z]/, {message: "Password must contain at least one lowercase"}),
        .regex(/[0-9]/, {message: "Password must contain at least on number"})
        .regex(/[^A-Za-z0-9]/, {message: "Password must contain at least one special character"}) 
});

export type UserInput = z.infer<typeof userSchema>;