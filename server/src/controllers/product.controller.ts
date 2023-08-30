import {Request,Response} from 'express';
import { getProductsByStore } from '../models/products.model';
import { generateUUID } from '../utils/generic.util';
import { IProduct } from '../models/products.model';

export async function getStoreProduct(req : Request,res:Response){
    try {
        const {storeId} = req.params;
        if(!storeId){
            return res.status(404).json({
                error : "no store id provied"
            });
        }
        const dbResut = await getProductsByStore(storeId);
        return res.status(200).json(dbResut);
    } catch (error) {
        throw error;
    }
}

export async function addNewProduct(req : Request, res : Response){
    try {
        const id = await generateUUID();
        console.log(req.body);

    } catch (error) {
        
    }
}