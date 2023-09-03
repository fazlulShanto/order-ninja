import { Router } from "express";
import { getPathaoCity,getPathaoZone,getPathaoArea,getPathoCost } from "../controllers/patho.controller";


 const pathaoRouter = Router();

pathaoRouter.get('/city',getPathaoCity);

pathaoRouter.get('/zone/:cityId',getPathaoZone);
pathaoRouter.get('/area/:zoneId',getPathaoArea);

pathaoRouter.post(`/price`,getPathoCost);

export default pathaoRouter;