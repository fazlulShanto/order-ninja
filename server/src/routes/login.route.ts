import { Router, Request, Response } from "express";
import { handleLogin } from "../controllers/login.controller";



const loginRoute = Router();

// get a user info
// loginRoute.post('/',handleLogin);
loginRoute.post('/', (req, res) => {
    res.send('new login route working.');
});
// loginRoute.get('/',(req,res)=> res.send("login get"));
//create a new user account
// loginRoute.get('/verify',createNewUser);

export default loginRoute;