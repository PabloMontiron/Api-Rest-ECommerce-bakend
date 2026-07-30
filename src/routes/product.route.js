import { Router } from "express";

import { 
    getAllProducts, 
    getProductById, 
    createProduct,
    deleteProductById, 
    softDeleteProductById } from "../controllers/product.controller.js"; 

const router = Router();

router.get("/products",getAllProducts); // ok

router.get("/products/:id",getProductById); // ok

router.post("/products",createProduct); // ok
 
router.delete("/products/:id",deleteProductById); // ok

router.patch("/products/:id",softDeleteProductById); // ok

export default router;