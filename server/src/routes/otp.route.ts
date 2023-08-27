import { Router } from "express";
import { getOtp ,createOtp} from "../controllers/otp.controller";

const otpRouter = Router();

otpRouter.get('/:email',getOtp);
otpRouter.get('/create/:email',createOtp);