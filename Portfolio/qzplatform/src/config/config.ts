import { config } from 'dotenv';

config();

function getEnv(key: string): string {
    const value = process.env[key];

    if (!value){
        throw new Error ("Missing Env value")
    }
    return value;
}

export const settings = {
    port: getEnv('PORT'),
    mongoUri: getEnv('MONGO_URL'),
    jwt:{
        jwtSecret: getEnv('JWT_SECRET'),
        jwtExpiresIn: getEnv('JWT_EXPIRES_IN'),
    },
    mail: getEnv('BREVO_API')
    
}