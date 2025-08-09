import jwt, { Secret } from 'jsonwebtoken';
import logger from '../utils/logger.util';
import { settings } from '../config/config';

logger.info(settings.jwt.jwtSecret);
const JWT_EXPIRES_IN = <string>settings.jwt.jwtExpiresIn;

// Decode the base64 secret once and cache it
let decodedSecret: string | null = null;

function getDecodedSecret(): string {
    if (!decodedSecret) {
        try {
            decodedSecret = Buffer.from(settings.jwt.jwtSecret, 'base64').toString('ascii');
        } catch (error) {
            logger.error('Failed to decode JWT secret:', error);
            throw new Error('JWT secret decoding failed');
        }
    }
    return decodedSecret;
}


export const signJWT = async (payload: object): Promise<string> => {
    const secret = await getDecodedSecret();
    return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
    const secret = await getDecodedSecret();
    const decoded = jwt.verify(token, secret);
    return decoded as T;
};