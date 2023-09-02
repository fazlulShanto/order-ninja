import { Router ,Request,Response} from "express";
import { createNewUser, getUserList } from "../controllers/user.controller";
import {CustomRequest} from '../Interfaces/CustomRequest';

const userRoute = Router();

// get a user info
userRoute.get('/:userId',(req : CustomRequest,res)=>{

    console.log(req.user)
    res.send("hello getting user");
});
userRoute.get('/all',getUserList);

//create a new user account
userRoute.post('/create',createNewUser);

export default userRoute;