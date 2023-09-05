import {Request,Response} from 'express';
import { getUserByEmail } from '../models/user.model';
import jwt,{Secret} from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function handleLogin(req : Request,res:Response){

    try {
        // console.log('handle login');
        const saltRounds = process.env.SALT_ROUND!;
        const {email , password} = req.body;
        const jwtSecret : Secret = process.env.JWT_SECRET as string;
        const dbUser = await getUserByEmail(email);
        if(!dbUser){
            return res.sendStatus(401);
        }
        const userObj = {
            email : dbUser?.email,
            role : dbUser?.role,
            id : dbUser?.id,
            name : dbUser?.first_name + " "+dbUser?.last_name,
            first_name : dbUser?.first_name,
            last_name : dbUser?.last_name,
            store_id  : dbUser?.store_id
        };
        const isPasswordCorrect = bcrypt.compareSync(
            password,
            dbUser!.password
          );
          
        if(!isPasswordCorrect){
            return res.sendStatus(401);
        }

        const signedToken = jwt.sign(userObj,jwtSecret,{
            expiresIn:30 * 24*3600000,
        });    
         
        // console.log('db result',userObj);
        res.cookie('jwt',signedToken,{
            httpOnly:true,
            maxAge : 30 * 24*3600000
        });
        res.cookie('user_id',dbUser.id);

        
        return res.status(200).json({
            token : signedToken,
            ...userObj
        });
        
    } catch (error) {
        
        return res.status(500).json(error);
    }
}