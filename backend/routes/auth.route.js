import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/user/user-register", register);
router.post("/user/user-login", login);

export default router;
