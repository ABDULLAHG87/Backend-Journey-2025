import User from "../models/users.model";
import {IUser} from "../types/Interfaces/user.interface";
import {z} from "zod";
import bcrypt from "bcrypt";
import logger from "../utils/logger";
import {userSchema} from "../validators/user.validator";

export type CreateUserInput = z.infer<typeof userSchema>;

export const createUser = async (data: CreateUserInput): Promise<IUser> => {
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser){
        logger.error("User Already exists");
        throw new Error("Email Already exists");
    }

    const newUser = await User.create(data);
    return newUser;
}
