import { Router } from "express";

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

router.get("/low-stock",getLowStockSkus); 

router.get("/:skuCode",getSkuBySkuCode);

router.patch("/:skuCode",updateSkuBySkuCode);

router.delete("/:skuCode",deleteSkuBySkuCode);


// 
export default router;