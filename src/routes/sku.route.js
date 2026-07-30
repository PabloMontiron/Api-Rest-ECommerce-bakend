import { Router } from "express";

import { createSku } from "../controllers/sku.controller.js";
import { updateSkuById } from "../services/sku.service.js";

const router = new Router();


// routes
router.post("/sku",createSku);

router.patch("/sku/:id",updateSkuById);




export default router;