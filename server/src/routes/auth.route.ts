import { Router ,Request,Response} from "express";



const authRouter = Router();

// get a user info
authRouter.get('/',(req,res)=>{
    res.send("hello getting user");
});

//create a new user account

export default authRouter;