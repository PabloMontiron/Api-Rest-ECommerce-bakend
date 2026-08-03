import { Router } from "express";

// por cinvencion rutas, se hace exportacion con mencion
import { createSku, 
         getAllSkus,
         updateSkuBySkuCode, 
         getSkuBySkuCode, 
         deleteSkuBySkuCode,
         getLowStockSkus 
          } from "../controllers/sku.controller.js";

const router = new Router();

// routes
router.post("/",createSku);// check

router.get("/all",getAllSkus); // check

router.get("/low-stock",getLowStockSkus); // check

router.get("/:skuCode",getSkuBySkuCode); // check

router.patch("/:skuCode",updateSkuBySkuCode); // check

router.delete("/:skuCode",deleteSkuBySkuCode); // check


// 
export default router;