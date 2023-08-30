import mongoose from "mongoose";
export interface IProduct {
    id : string,
    store_id : string,
    name : string,
    category : string[],
    price : number,
    stock:number,
    description  : string,
    images : string[],
    unit_size:string,
    weight : string,
    reviews : []
}
const productSchema = new mongoose.Schema<IProduct>({
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

const productModel = mongoose.model<IProduct>('product',productSchema);

export async function getProductsByStore(storeId:string){
    try {
        const productLists = await productModel.find<IProduct[]>({id :storeId}).exec();
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

export async function createSingleProduct(poductInfo : IProduct) {
    try {

        const newProduct = await productModel.create(poductInfo);
        return newProduct;
        
    } catch (error) {
        throw error;
    }
    
}

export async function deleteSingleProduct(productId :string){
    try {
        const result = await productModel.deleteOne({id : productId}).exec();
        return result;
    } catch (error) {
        throw error;
    }
}