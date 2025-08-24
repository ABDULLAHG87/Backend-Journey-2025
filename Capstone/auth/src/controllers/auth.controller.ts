import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { createUser, signInUser } from "../services/auth.service";
import { userSchema } from "../validators/user.validator";

export const registerUser = async (req: Request, res: Response) => {
  const validation = userSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      errors: validation.error.flatten().fieldErrors,
    });
  }

  try {
    const user = await createUser(validation.data);
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
