import { Router } from "express";
import { getStoreProduct,addNewProduct } from "../controllers/product.controller";


const productRouter = Router();

productRouter.get('/:storeId',getStoreProduct);
productRouter.post('/:storeId',addNewProduct);