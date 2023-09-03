import { Router ,Request,Response} from "express";
import { createNewUser, getUserList,updateUser,getUserInfo } from "../controllers/user.controller";
import {CustomRequest} from '../Interfaces/CustomRequest';
import { getUserById } from "../models/user.model";

const userRoute = Router();

// get a user info
userRoute.get('/:userId',async (req : CustomRequest,res)=>{
    const {userId} = req.params;
   try {
        const user = await getUserById(userId);
        return res.json(user);
   } catch (error) {
        return res.sendStatus(500);
   }
});
userRoute.get('/all',getUserList);

//create a new user account
userRoute.post('/create',createNewUser);

// update a user account

userRoute.post('/update/:userId',updateUser)

export default userRoute;