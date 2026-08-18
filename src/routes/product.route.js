// 1. importo la libreria Router
import { Router } from "express";
import { authentication } from "../middlewares/auth.middleware.js";

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
router.get("/",getAllProducts); // no reuiere auth
router.post("/",authentication,createProduct); // 

router.get("/:id",getProductById); // no requiere auth
router.delete("/:id",authentication,deleteProductById); 
router.patch("/:id",authentication,softDeleteProductById); 

export default router;