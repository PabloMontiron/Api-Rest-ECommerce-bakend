import { Router } from "express";

import { 
    getAllProducts, 
    getProductById, 
    createProduct,
    deleteProductById, 
    softDeleteProductById } from "../controllers/product.controller.js"; 

const router = Router();

router.get("/",getAllProducts); // ok

router.get("/:id",getProductById); // ok

router.post("/",createProduct); // ok
 
router.delete("/:id",deleteProductById); // ok

router.patch("/:id",softDeleteProductById); // ok

export default router;