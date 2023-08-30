import { Router } from "express";
import { getSupplierStoreDashboard } from "../controllers/store.controller";

const storeRouter = Router();


storeRouter.get('/',(req,res)=>{
   return res.send("Store router home!");
});

storeRouter.get('/dashboard',getSupplierStoreDashboard);


export default storeRouter;