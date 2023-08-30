import mongoose from "mongoose";
type OrderStatusType = "completed" | "pending";
export interface IOrder{
    id : String,
    store_id : String,
    address : String,
    status : OrderStatusType
    user_id : String,
    unit_size : number,
    price : number,
    total_price : number
}

const orderSchema = new mongoose.Schema<IOrder>(
    {
        id : String,
        store_id : String,
        address: String,
        status:String,
        user_id:String,
        unit_size : String,
        price : Number,
        total_price : Number
    },{
        timestamps : true
    }
);



const orderModel = mongoose.model('order',orderSchema);

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

