import mongoose from "mongoose";
import { generateUUID } from "../utils/generic.util";

export interface ICateogry{
    id : string,
    name : string
}

const categorySchema = new mongoose.Schema<ICateogry>({
    id : String,
    name : String
},{
    timestamps : true
});

const categoryModel = mongoose.model<ICateogry>('category',categorySchema);

export async function getCategories(){
    try {
        const catList = categoryModel.findOne().exec();
        return catList;
    } catch (error) {
        throw error;
    }
}
export async function addCategories(catName : string){
    try {
        const id =await generateUUID();
        const newCat  : ICateogry = {
            id : id,
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

