import mongoose from "mongoose";
export interface IProducts {
    id : string,
    store_id : string,
    name : string,
    category : string[],
    price : number,
    stock:number,
    description  : string,
    images : string[],
    reviews : []
}
const productSchema = new mongoose.Schema<IProducts>({
    id : String,
    store_id : String,
    name : String,
    category : Array,
    price : Number,
    stock : Number,
    description : String,
    images : Array,
    reviews : Array

},{
    timestamps : true
});

const productModel = mongoose.model<IProducts>('product',productSchema);

export async function getProductsByStore(storeId:string){
    try {
        const productLists = await productModel.find({id :storeId}).exec();
        return productLists;
    } catch (error) {
        throw error;
    }
}

export async function getSingleProduct(productId : string){
    try {  
        const product = await productModel.findOne({id : productId}).exec();
        return product;
    } catch (error) {
        throw error;
    }
}