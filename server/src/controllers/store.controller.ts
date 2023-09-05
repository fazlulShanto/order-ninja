import { getTodayOrders } from "../models/distributedOrder.model";
import {Request,Response} from 'express';



export async function getSupplierStats(req :Request,res : Response ){
    // today sales
    const {store_id} = req.params;

    const defaultObj = {
        "orders":0,
        "quantity":0,
        "customers":0,
        "sells":0
        };

    try {

        const todayOrder = await getTodayOrders(store_id);

        // console.log(todayOrder,'===============')
        if(todayOrder.length){

            return res.json(...todayOrder);
        }
        else{
            return res.json(defaultObj);
        }
        
    } catch (error) {
        throw error;
    }
    
    //today order
    //today total sold
    //total customer

    // latest sales info

    // weekly stats
    // top products

}