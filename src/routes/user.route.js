import { Router } from "express";

import { 
    createUser,
    getUserById,
    getAllUsers,
    updateUserById,
    getUserOrdersById,
    getInactiveUsers,
    softDeleteUserById
} from "../controllers/user.controller.js";

const router = new Router();

// ---- //

// estaticas
router.post("/",createUser); // check
router.get("/all",getAllUsers); // check
router.get("/inactive",getInactiveUsers); // check
// dinamicas
router.get("/:id",getUserById); // check
router.patch("/:id",updateUserById); // check
router.get("/:id/orders",getUserOrdersById); // check
router.delete("/:id/delete",softDeleteUserById); // check

// ---- //

export default router;