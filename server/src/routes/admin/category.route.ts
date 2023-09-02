import { Router } from "express";
import { getCatList,addCatList,deleteCat} from "../../controllers/category.controller";



const cateogryRouter = Router();

cateogryRouter.get('/',getCatList);
cateogryRouter.post('/',addCatList);
cateogryRouter.get('/delete/:categoryId',deleteCat);

export default cateogryRouter;