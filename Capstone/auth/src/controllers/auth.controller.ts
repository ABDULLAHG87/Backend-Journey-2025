import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { createUser, signInUser, getUsersServices } from "../services/auth.service";
import { userSchema } from "../validators/user.validator";
import {sendMail} from "../utils/mailer"

export const registerUser = async (req: Request, res: Response) => {
  const validation = userSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      errors: validation.error.flatten().fieldErrors,
    });
  }

  try {
    const user = await createUser(validation.data);
    //Send Welcome email 
    sendMail({
      to: user.email,
      subject:"Welcome to Auth-lab-express",
      text: `Hi ${user.email}, Welcoeme to Auth-lab-Express Web Application`
    })
    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async(req: Request, res: Response) =>{
  try{
    const { user, token} = await signInUser(req.body);
    res.status(200).json({
      message: "Login Successful",
      user, 
      token
    })
  }catch(error:any){
    res.status(400).json({error: error.message})
  }
}

export const getUsers = async(req:Request, res:Response) => {
  try {
    const users = await getUsersServices();

    if (users.length === 0){
      res.status(400).json({message: "No Users found"})
    }
    res.status(200).json({
      users
    })
  }catch(error: any){
    res.status(500).json({message: "Server Error", error: error.message});
  }
}
