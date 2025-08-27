import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { settings } from "../config/config";

export interface AuthRequest extends Request{
    user?: any;
}


export const authMiddleware = (req:AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    //Checking if Header of Request as "Authorization: Bearer <token>"
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "No token provided"});
    }

    //Extracting the token part of the authorization header
    const token = authHeader.split(" ")[1];

    try {
        //Verifying token using the jwtScecret
        const decoded = jwt.verify(token, settings.JWT_SECRET) as {id: string, email: string};
        //Attaching req.user to decoded value;
        (req as any).user = decoded;
        next();
    } catch(error){
        return res.status(401).json({message: "Invalid Token"});
    }
}

export const authorize = (...roles: string[]) => {
    return (req:AuthRequest, res: Response, next:NextFunction) => {
        if(!roles.includes(req.user.role)){
            res.status(403).json({message: "Forbidden" });
        }
        next();
    };
}

export const errorHandler = (err:any, req:Request, res: Response, next: NextFunction)=>{
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Something went wrong"
    });
}
