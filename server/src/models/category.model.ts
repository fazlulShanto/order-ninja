import mongoose from "mongoose";
import { generateUUID } from "../utils/generic.util";

export interface ICateogry{
    id : string,
    image : string,
    name : string
}

const categorySchema = new mongoose.Schema<ICateogry>({
    id : String,
    image:String,
    name : String
},{
    timestamps : true
});

const categoryModel = mongoose.model<ICateogry>('category',categorySchema);

export async function getCategories(){
    try {
        const catList = categoryModel.find().exec();
        return catList;
    } catch (error) {
        throw error;
    }
}
export async function addCategories(catName : string,imageUrl : string){
    try {
        const id =await generateUUID();
        const newCat  : ICateogry = {
            id : id,
            image:imageUrl,
            name : catName
        }
        const catList = categoryModel.create(newCat);
        return catList;
    } catch (error) {
        throw error;
    }
}

export async function deleteCategory(id :string){
    try {
        const result =await categoryModel.deleteMany({id :id});
        return true;
    } catch (error) {
        throw error;
    }
}

