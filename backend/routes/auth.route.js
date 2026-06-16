import express from "express";
import {
  register,
  login,
  createProfile,
  getProfile,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/user/user-register", register);
router.post("/user/user-login", login);
router.post("/user/create-profile", authMiddleware, createProfile);
router.get("/user/get-profile", authMiddleware, getProfile);

export default router;
