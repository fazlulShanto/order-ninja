import { Request,Response, response } from "express";
import { getAllProducts } from "../models/products.model";


export async function getAllProductList(req:Request,res : Response){
    try {
        
        const result = await getAllProducts();
        return res.json(result);
    } catch (error) {
        return [];
    }
}