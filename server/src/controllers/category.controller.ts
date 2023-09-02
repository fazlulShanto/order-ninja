import {Request,Response} from 'express';

import { generateUUID } from '../utils/generic.util';
import { IProduct } from '../models/products.model';
import { getCategories ,deleteCategory, addCategories} from '../models/category.model';

export async function getCatList(req : Request,res:Response){
    try {
        const dbResut = await getCategories();

        return res.status(200).json(dbResut);
    } catch (error) {
        throw error;
    }
}
export async function addCatList(req : Request,res:Response){
    try {
        const {name,image} = req.body;

        // console.log('this is not good');
        if(!name){
            return res.status(404).json({
                error : "no store id provied"
            });
        }
        const dbResut = await addCategories(name,image);
        return res.status(200).json(dbResut);
    } catch (error) {
        throw error;
    }
}


export async function deleteCat(req:Request,res : Response){
    try {
        const catId = req.params.categoryId;
        // console.log(`here : pid = ${catId}`)
        const result = await deleteCategory(catId);
        return res.send("done");
    } catch (error) {
        return res.send("can't not delete");
    }
}