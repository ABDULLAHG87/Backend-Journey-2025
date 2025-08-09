import app from './app';
import logger from './utils/logger.util'
import { connectDB } from './config/db';
import { settings } from './config/config'

connectDB();
const PORT = settings.port || 8800;

async function startServer(){
    try {
        app.listen(PORT, () =>{
            logger.info(`Server Starting on Port: ${PORT}`);
        });
    } catch {
        console.error(" Failed to Start Server:", PORT);
        process.exit(1);
    }
}

startServer();