import { Router ,Request,Response} from "express";

const userRoute = Router();

// get a user info
userRoute.get('/:userId',(req,res)=>{
    res.send("hello getting user");
});

//create a new user account
userRoute.post('/',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

export default userRoute;