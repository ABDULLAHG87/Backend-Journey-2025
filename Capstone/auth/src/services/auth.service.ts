import User from "../models/users.model";
import jwt from "jsonwebtoken"
import {IUser} from "../types/Interfaces/user.interface";
import {z} from "zod";
import bcrypt from "bcrypt";
import logger from "../utils/logger";
import {userSchema, UserInput, loginSchema, LoginInput } from "../validators/user.validator";
import {settings} from "../config/config"

//export type CreateUserInput = z.infer<typeof userSchema>;


export const createUser = async (data: UserInput): Promise<IUser> => {
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser){
        logger.error("User Already exists");
        throw new Error("Email Already exists");
    }

    const newUser = await User.create(data);
    return newUser;
}

export const signInUser = async(data: LoginInput): Promise<{user: IUser; token: string}> => {
    //check if the user already exist
    const existingUser = await User.findOne({email: data.email});

    if (!existingUser){
        logger.error("User not found");
        throw new Error("Email doesn't exist")
    }

    //Compare Password 
    const isPasswordValid = await existingUser.comparePassword(data.password);

    if (!isPasswordValid){
        logger.info("Credentials Doesn't Match");
        throw new Error("Input the appropriate credentialx");
    }

    const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email},
        settings.JWT_SECRET,
        {
            expiresIn: '1d'
        }

    ) 

    return {user: existingUser, token};
}

export const getUsersServices = async (): Promise<IUser[]> => {
    const allUsers: IUser[] = await User.find();
    
    return allUsers;
}