import { Request,Response } from "express";
import { generateUUID } from "../utils/generic.util";
import {IUser, createUser, getUserByEmail} from '../models/user.model';
import bcrypt from 'bcrypt';
import { createStore } from "../models/store.model";


export async function newUserController(req : Request,res:Response){
    try {
        const saltRounds = process.env.SALT_ROUND!;

        console.log(req.body);
        //extract data
        const {first_name,last_name,isbussiness,password,email} = req.body;
        //check if user already exists
        const oldUser = await getUserByEmail(email);
        if(oldUser?.email){
            return res.status(404).json({
                error : "User Already Exist!"
            });
        }

        const id = await generateUUID();
        const role = isbussiness ?  "business" : "supplier";
        //has password

        const hassedPassword = await bcrypt.hash(password, parseInt(saltRounds));

        const userObj :IUser = {
            id : id,
            first_name : first_name,
            last_name : last_name,
            password : hassedPassword,
            email : email,
            role : role
        };
        
        if(role=='supplier'){
            const drd = await createStore(id);
            userObj.store_id = drd.id;
            console.log('new store created',userObj);
        }
        // console.log(userObj);
        const dbRes = await createUser(userObj);
        
         
       return res.status(200).json({
        message : 'created',
        status : 'ok',
        data : userObj
       });
    } catch (error) {
        // console.log((error as Error).message);
        return res.status(500).send((error as Error).message);
    }
}