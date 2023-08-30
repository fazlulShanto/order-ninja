//required packages
import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './src/routes/index.router';

//variable declarations
const expressApp = Express();



// expressApp.use(cors());
expressApp.use(cors({origin:true, credentials:true}));
expressApp.use(Express.json({limit:'10mb'}));

expressApp.use(cookieParser());

expressApp.use('/api',indexRouter);

export default expressApp;
