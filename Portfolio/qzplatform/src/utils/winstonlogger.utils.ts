import { timeStamp } from 'console';
import winston from 'winston';
const { combine, timestamp, printf, colorize} = winston.format

const customFormat = printf(({level, message, timestamp})=> {
    return `[${timestamp}] ${level}: ${message}`;
});


const logger = winston.createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
        transports: [new winston.transports.Console()],

})

export default logger;