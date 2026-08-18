import { Router } from "express";

import {
    addProductToCart,
    getCart,
    updateQuantity,
    deleteItem,
    deleteAllItems
} from "../controllers/cart.controller.js";

import { authentication } from "../middlewares/auth.middleware.js"; 

const router = Router();

// 1. obtener carrito 
router.get("/",authentication,getCart);
// 2. agregar producto 
router.post("/add-product",authentication,addProductToCart);
// 3. vaciar todo el carrito
router.delete("/delete-all",authentication,deleteAllItems);

// 4. actualizar cantidad de un producto
router.patch("/update-item/:skuId",authentication,updateQuantity);
router.delete("/delete-item/:skuId",authentication,deleteItem); 

export default router;