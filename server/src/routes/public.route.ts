import { Router,Request,Response } from "express";
import { addNewProduct ,deleteProduct} from "../controllers/product.controller";
import { getSingleProduct, getAllProducts } from "../models/products.model";
import { getAllProductList } from "../controllers/public.controller";


const publicRouter = Router();

//get all product
publicRouter.get('/product',getAllProductList);
// publicRouter.post('/product/search',getStoreProduct);

//a single store product

//get a single prodcut



// publicRouter.get('/:storeId',getStoreProduct);
publicRouter.get('/single/:productId', async (req:Request,res: Response)=>{
    try {
        const {productId} = req.params;
        const singleProduct = await getSingleProduct(productId);
        return res.json(singleProduct);

    } catch (error) {
        console.log(error);
    }
});


export default publicRouter;