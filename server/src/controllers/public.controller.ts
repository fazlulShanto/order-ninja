import { Request,Response, response } from "express";
import { getAllProducts } from "../models/products.model";
import { getAllUsers } from "../models/user.model";


export async function getAllProductList(req:Request,res : Response){
    try {
        
        const result = await getAllProducts();
        return res.json(result);
    } catch (error) {
        return [];
    }
}
export async function productSearch(req:Request,res : Response){
    try {
        const {search,category} = req.body;
        let productList =  await getAllProducts();
        if(category){
            productList = productList.filter( prdc =>{
                return prdc.category.includes(category);
            });
        }
        if(search){
            productList = productList.filter( prdc =>{
                return prdc.name.includes(search);
            });
        }
        return res.json(productList);

    } catch (error) {
        return [];
    }
}


export async function getPublicUsers(rew : Request,res : Response){
    try {
        const result = await getAllUsers();
        console.log('got public user list')
        return res.json(result);
    } catch (error) {
        return [];
    }
}