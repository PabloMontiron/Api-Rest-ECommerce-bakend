import { Router } from "express";
import { getAllProducts } from "../services/product.service"; 

const router = Router();

router.get("/products/",getAllProducts);

router.get("/products/:id",getProductById);



export default router;