import { Router } from "express";
import userRoute from "./user.route";
import { checkAuth } from "../middlewares/auth";
import loginRoute from "./login.route";
import registrationRouter from "./register.route";
import storeRouter from "./store.route";
import cloudinaryRouter from "./cloudinary.route";



const indexRouter = Router();
indexRouter.use(cloudinaryRouter);
indexRouter.get('/',(req,res)=>{
    res.send('Order Ninja Server.');
});

indexRouter.use('/login',loginRoute);
indexRouter.use('/register',registrationRouter);

indexRouter.use(checkAuth);
indexRouter.use('/user',userRoute);
indexRouter.use('/store',storeRouter);


export default indexRouter;