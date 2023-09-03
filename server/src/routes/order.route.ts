import { Router ,Request,Response} from "express";
import {CustomRequest} from '../Interfaces/CustomRequest';
import { getSingleOrder,getOrdersByStore,
    getOrdersByUser,getAllOrders ,
    createUserOrder
} from "../controllers/Order.controller";



const orderRoute = Router();

orderRoute.get('/',(req,res)=>{
    return res.json({message : "order home"});
})

// get a single user order info
orderRoute.get('/user/:orderId',getSingleOrder);
orderRoute.get('/user/all',getAllOrders);
//for stores
orderRoute.get('/store/:orderId',getSingleOrder);
orderRoute.get('/store/update/:orderId',getSingleOrder);
orderRoute.get('/store/all',getAllOrders);

//create a new order
orderRoute.post('/create',createUserOrder);
// orderRoute.get('/delete/orderId',);


export default orderRoute;