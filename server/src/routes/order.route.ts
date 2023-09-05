import { Router ,Request,Response} from "express";
import {CustomRequest} from '../Interfaces/CustomRequest';
import { confirmOrderBySeller, createOrder,
    getOrdersByStoreId, getLatestSales,
    getTopSales,
    getUserOrdersById,
    getStoreWeeklyStats,} from "../controllers/Order.controller";
import { getAllOrdersWithStore } from "../models/distributedOrder.model";



const orderRoute = Router();

orderRoute.get('/',async (req,res)=>{
    try {
        const result = await getAllOrdersWithStore();
        return res.json(result);
    } catch (error) {
        console.log(error);
        return res.send("nothing")
    }
    return res.json({message : "order home"});
});

// get a single user order info
// orderRoute.get('/user/:orderId',getSingleOrder);
// orderRoute.get('/user/all',getAllOrders);
//for stores
// orderRoute.get('/store/:orderId',getSingleOrder);
// orderRoute.get('/store/update/:orderId',getSingleOrder);
orderRoute.get('/store/:storeId',getOrdersByStoreId);
orderRoute.get('/user/:userId',getUserOrdersById);
orderRoute.post('/confirm',confirmOrderBySeller);
orderRoute.get('/latest-sales/:storeId',getLatestSales);
orderRoute.get('/top-sales/:storeId',getTopSales);


//create a new order
orderRoute.post('/create',createOrder);

orderRoute.get('/stats/:storeId',getStoreWeeklyStats);
// orderRoute.get('/delete/orderId',);


export default orderRoute;