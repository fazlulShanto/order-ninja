import mongoose from "mongoose";
import { generateUUID } from "../utils/generic.util";
type OrderStatusType = "delivered"| "confirmed" | "pending";
export interface IOrder{
    id : string,
    user_id : string,
    address : object,
    status : OrderStatusType
    unit_size : number,
    price : number,
    items : object,
    weight : number,
    order_type : string,
    order_date : Date,
    suplier_orders  : object,
}

const orderSchema = new mongoose.Schema<IOrder>(
    {
        id : String,
        user_id:String,
        address: Object,
        status:{
            type:'string',
            default:'pending'
        },
        unit_size : String,
        price : Number,
        items : Array,
        weight : Number,
        order_type : String,
        order_date : Date,
        suplier_orders: Array
    },{
        timestamps : true
    }
);

export const orderModel = mongoose.model('order',orderSchema);

export async function getOrdersByStore(storeId:string){
    try {
        const orderList = await orderModel.find({store_id : storeId}).exec();
        return orderList;
    } catch (error) {
        throw error;
    }
}
export async function getOrdersByUser(userId:string){
    try {
        const userOrderList = await orderModel.find({user_id : userId}).exec();
        return userOrderList;
    } catch (error) {
        throw error;
    }
}
export async function getOrdersByDate(date:string){
    try {
        const userOrderList = await orderModel.find({create : date}).exec();
        return userOrderList;
    } catch (error) {
        throw error;
    }
}

export async function createUserOrder(ordeObj :IOrder){
    try {
        console.log(ordeObj);
        const id = await generateUUID();
        // return userOrderList;
    } catch (error) {
        throw error;
    }
}


