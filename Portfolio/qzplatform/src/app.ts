import express, { Application, Router, Request, Response } from 'express';
import expressPino from 'express-pino-logger';
import logger from './utils/logger.util';
import morgan from 'morgan'
import { authRegisterController } from './controllers/auth.controller';
import { settings } from './config/config';
import routes from './routes/index';


//creation of app
const app: Application = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(expressPino({ logger }));
app.use(morgan('dev'));



//Route Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("API is running")
    logger.info(process.env.JWT_SECRET);
});

//API Route
app.use('/api/v1/auth', routes.auth)

//Root Route


export default app;