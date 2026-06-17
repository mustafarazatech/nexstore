import express from "express";
import {
  addCart,
  getCartItems,
  decreaseCartItem,
  increaseCartItem,
} from "../controllers/cart.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-cart", authMiddleware, addCart);
router.get("/cart-list", authMiddleware, getCartItems);
router.post("/cart/increase", authMiddleware, increaseCartItem);
router.post("/cart/decrease", authMiddleware, decreaseCartItem);

export default router;
