import { Router } from "express";

import { 
    getAllProducts, 
    getProductById, 
    createProduct,
    deleteProductById, 
    softDeleteProductById } from "../controllers/product.controller.js"; 

const router = Router();

router.get("/products",getAllProducts);

router.get("/products/:id",getProductById);

router.post("/products",createProduct);

router.delete("/products/:id",deleteProductById);

router.patch("/products/:id",softDeleteProductById);

export default router;