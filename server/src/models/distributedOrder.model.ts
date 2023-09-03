import mongoose from "mongoose";
type OrderStatusType = "completed" | "pending";
export interface IOrder{
    id : String,
    store_id : String,
    user_id : String,
    address : object,
    status : OrderStatusType
    unit_size : number,
    price : number,
    items : object,
    order_type : string,
    weight : number,
    order_date : object
}

const disOrderSchema = new mongoose.Schema<IOrder>(
    {
        id : String,
        store_id : String,
        address: Object,
        status:String,
        user_id:String,
        unit_size : String,
        price : Number,
        items:Object,
        order_type:String,
        weight:Number,
        order_date:Object
    },{
        timestamps : true
    }
);

export const disOrderModel = mongoose.model('distributedOrder',disOrderSchema);

export async function getOrdersByStore(storeId:string){
    try {
        const orderList = await disOrderModel.find({store_id : storeId}).exec();
        return orderList;
    } catch (error) {
        throw error;
    }
}

export async function getOrdersByUser(userId:string){
    try {
        const userOrderList = await disOrderModel.find({user_id : userId}).exec();
        return userOrderList;
    } catch (error) {
        throw error;
    }
}

export async function getOrdersByDate(date:string){
    try {
        const userOrderList = await disOrderModel.find({create : date}).exec();
        return userOrderList;
    } catch (error) {
        throw error;
    }
}

