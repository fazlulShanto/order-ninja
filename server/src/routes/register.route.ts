import { Router } from "express";
import { getOtp ,createOtp} from "../controllers/otp.controller";
import { newUserController } from "../controllers/registration.controller";

const registrationRouter = Router();

registrationRouter.post('/',newUserController);


export default registrationRouter;