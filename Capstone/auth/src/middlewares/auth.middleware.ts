import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { settings } from "../config/config";


export const authMiddleware = (req:Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    //Checking if Header of Request as "Authorization: Bearer <token>"
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "No token provided"});
    }

    //Extracting the token part of the authorization header
    const token = authHeader.split(" ")[1];

    try {
        //Verifying token using the jwtScecret
        const decoded = jwt.verify(token, settings.jwtSecret) as {id: string, email: string};
        //Attaching req.user to decoded value;
        (req as any).user = decoded;
        next();
    } catch(error){
        return res.status(401).json({message: "Invalid Token"});
    }
}