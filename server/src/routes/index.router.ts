import { Router } from "express";
import userRoute from "./user.route";
const indexRouter = Router();

indexRouter.get('/',(req,res)=>{
    res.send('Order Ninja Server.');
});

indexRouter.use('/user',userRoute);


export default indexRouter;