import express from "express";
import { addCart, getCartItems } from "../controllers/cart.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-cart", authMiddleware, addCart);
router.get("/cart-list", authMiddleware, getCartItems);

export default router;
