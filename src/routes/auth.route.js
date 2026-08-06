import { Router } from "express";
import { login } from "../controllers/auth.controller.js"; // del arch. auth.controller extra solo la funcion login

const router = Router();

// metodo post (log/auth) 
// no lleva middleware ya que debe ser publica y permitir su acceso para logeo
router.post("/login", login);

export default router;