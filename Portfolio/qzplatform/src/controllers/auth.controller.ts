import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { signJWT } from '../helpers/jwt.utils';
import { IUser } from '../types/user.interface';
import logger from '../utils/logger.util'; // Assuming you have a logger utility
//import {authService}


const users: IUser[] = [];

//controller for user registration
export async function authRegisterController(req: Request, res: Response) {
    const { username, email, password,verifyPassword} = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    if (password !== verifyPassword){
        logger.error('Passwords do not match');
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser: IUser = {
        id: new Date().toISOString(),
        username,
        email,
        password: hashedPassword,
    };

    users.push(newUser);

    // Generate JWT token
    const token = await signJWT({ id: newUser.id, username: newUser.username });

    res.status(201).json({ message: 'User registered successfully', token });
}

export async function getUserController(req: Request, res: Response){
    if (users.length === 0) {
        res.status(404).json({ message: 'No users found' });
        return;
    }

    const result = users.forEach(user => res.json(user));
} 