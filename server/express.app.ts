//required packages
import Express from 'express';
import cors from 'cors';
import indexRouter from './src/routes/index.router';
//variable declarations
const expressApp = Express();
expressApp.use(cors());
expressApp.use(Express.json({limit:'10mb'}));

expressApp.use(indexRouter);


export default expressApp;