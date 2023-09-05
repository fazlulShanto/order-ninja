import mongoose from "mongoose";
import { getProductsByStore } from "./products.model";
import { getOrdersByStore } from "./order.model";
import { generateUUID } from "../utils/generic.util";

export interface IStore{
    id :string,
    name : string,
    store_id : string,
    owner_id : string,
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
    owner_id:{
        type:String,
        unique:true
    },
    name : {
        type :String,
        unique : true
    },
    product_ids:Array,
    order_ids:Array,
    scheduled_order:Array,
    payment_stats:Array
    
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

export async function getStoreByUserId(userId  : string){
    //get product list 
    try {
        const storeInfo  = await storeModel.findOne({ owner_id: userId}).exec();
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

export async function deleteStoreById(storeId : string){
    try {
        const storeInfo  = await storeModel.deleteOne({id : storeId}).exec();
        return storeInfo;
    } catch (error) {
        throw error;
    }
}

export async function createStore(userId :string,name : string = ''){
    const id = await generateUUID();
    try {
        const store = await storeModel.create({
            owner_id: userId,
            id:id,
            name : name,
        });
        return store;
    } catch (error) {
        console.log(error)
        throw error;
    }
}