import { Router ,Request,Response} from "express";
import {CustomRequest} from '../Interfaces/CustomRequest';
import { confirmOrderBySeller, createOrder,
    getOrdersByStoreId, getLatestSales,
    getTopSales,
    getUserOrdersById,
    getStoreWeeklyStats,} from "../controllers/Order.controller";
import { getAllOrdersWithStore } from "../models/distributedOrder.model";
import { paymentController } from "../controllers/payment.controller";



const paymentRoute = Router();

paymentRoute.post('/',paymentController);


export default paymentRoute;