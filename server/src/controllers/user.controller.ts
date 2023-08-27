import { getUser } from "../models/user.model";
import {Request,Response} from 'express'


export async function getUserInfo(req : Request,res : Response){
    try {
        const {userId} = req.params;
        const userData =await getUser(userId);
        return res.json(userData);
    } catch (error) {
       return res.sendStatus(500);
    }
}

export async function createNewUser(req : Request,res : Response){
    try {
        const {userId} = req.params;
        const userData =await getUser(userId);
        return res.json(userData);
    } catch (error) {
       return res.sendStatus(500);
    }
}

