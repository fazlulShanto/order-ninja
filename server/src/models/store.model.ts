import mongoose from "mongoose";
import { getProductsByStore } from "./products.model";
import { getOrdersByStore } from "./order.model";

export interface IStore{
    id :string,
    name : string,
    product_ids: string[],
    order_ids : string[],
    scheduled_order : string[],
    payment_stats :string[]
}

const storeSchema = new mongoose.Schema<IStore>({
    id : {
        type:String,
        unique:true
    },
    name : {
        type :String,
        unique : true
    }
},{
    timestamps:true
});

const storeModel = mongoose.model<IStore>('store',storeSchema);

export async function getStoreById(storeId  : string){
    //get product list 
    try {
        const storeInfo  = await storeModel.findOne({id : storeId}).exec();
        return storeInfo;
    } catch (error) {
        throw error;
    }
}

export async function getAllStore(storeId  : string){
    //get product list 
    try {
        const storeInfo  = await storeModel.find().exec();
        return storeInfo;
    } catch (error) {
        throw error;
    }
}

