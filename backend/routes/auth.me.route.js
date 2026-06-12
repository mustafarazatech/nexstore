import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/auth/me", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user.id,
      role: req.user.role,
    },
  });
});

export default router;
