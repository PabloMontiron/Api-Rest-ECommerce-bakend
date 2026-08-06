// 1. importo la libreria Router
import { Router } from "express";

// 2. importo las funciones del controlador
import { 
    getAllProducts, 
    getProductById, 
    createProduct,
    deleteProductById, 
    softDeleteProductById } from "../controllers/product.controller.js"; 

// 3. instancion Roter()
const router = Router();

// 4. armo las rutas. recordar 1ro estaticas luego dinamicas
router.get("/",getAllProducts); // ok
router.post("/",createProduct); // ok

router.get("/:id",getProductById); // ok
router.delete("/:id",deleteProductById); // ok
router.patch("/:id",softDeleteProductById); // ok

// exporto todo como default 
export default router;