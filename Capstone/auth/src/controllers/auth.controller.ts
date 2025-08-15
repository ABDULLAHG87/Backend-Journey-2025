import {Request, Response} from "express";
import {registerUser} from "../services/auth.service"
import {userSchema} from "../validators/user.validator"
import User from "../models/user.model";
import logger from "../utils/logger"

export const registerUser = async(req:Request, res: Response) => {
    const validation = userSchema.safeParse(req.body);

    if (!validation.success){
        return res.status(400).json({errors:"validation.error.flatten().fieldErrors"})
    }
    try {
        const user = await registerUser(validation.data)
        res.status(201).json({message: "User Registers successfully"})
    } catch (error:any){
        return res.status(400).json({message: error.message})
    }

}