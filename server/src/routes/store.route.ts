import { Router } from "express";
import { getSupplierStats } from "../controllers/store.controller";



const storeRouter = Router();


storeRouter.get('/',(req,res)=>{
   return res.send("Store router home!");
});

storeRouter.get('/stats/:store_id',getSupplierStats);


export default storeRouter;