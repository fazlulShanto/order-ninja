import { Router } from "express";
import { getCatList,addCatList,deleteCat} from "../../controllers/category.controller";



const cateogryRouter = Router();

cateogryRouter.get('/',getCatList);
cateogryRouter.post('/:categoryId',addCatList);
cateogryRouter.get('/delete/:categoryId',deleteCat);

export default cateogryRouter;