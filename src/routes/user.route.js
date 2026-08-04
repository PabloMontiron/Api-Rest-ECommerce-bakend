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

router.post("/", createUser);

router.get("/:id",getUserById);

router.get("/all",getAllUsers);

router.patch("/:id",updateUserById);

router.get("/:id",getUserOrdersById);

router.get("/",getInactiveUsers);

router.patch("/:id",softDeleteUserById);

// ---- //

export default router;