import mongoose from 'mongoose';
import { settings } from './config';
import logger  from '../utils/logger.util';

export const connectDB= async () => {
    try {
        await mongoose.connect(settings.mongoUri)
        logger.info("DB Connected")
    } catch{
        logger.info("Erro Connecting to DB");
        process.exit(1);
    }
}
