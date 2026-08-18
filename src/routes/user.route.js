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

import { authentication } from "../middlewares/auth.middleware.js";

const router = new Router();

// ---- //

// estaticas
router.post("/",createUser); // check
router.get("/all",authentication,getAllUsers); // check
router.get("/inactive",authentication,getInactiveUsers); // check
// dinamicas
router.get("/:id",authentication,getUserById); // check
router.patch("/:id",authentication,updateUserById); // check
router.get("/:id/orders",authentication,getUserOrdersById); // check
router.delete("/:id/delete",authentication,softDeleteUserById); // check

// ---- //

export default router;