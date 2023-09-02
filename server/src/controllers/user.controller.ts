import { getUserById,getAllUsers } from "../models/user.model";
import {Request,Response} from 'express'



export async function getUserInfo(req : Request,res : Response){
    try {
        const {userId} = req.params;
        const userData =await getUserById(userId);
        return res.json(userData);
    } catch (error) {
       return res.sendStatus(500);
    }
}
export async function getUserList(req : Request,res : Response){
    try {
        const userData =await getAllUsers();
        return res.json(userData);
    } catch (error) {
       return res.sendStatus(500);
    }
}

export async function createNewUser(req : Request,res : Response){
    try {
        // validate mail / password
        
        // create user id
        // 
        //
        const {userId} = req.params;

        const userData =await getUserById(userId);
        return res.json(userData);
    } catch (error) {
       return res.sendStatus(500);
    }
}

