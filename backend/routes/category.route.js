import express from "express";
import {
  addCategory,
  getCategoryPhoto,
  getCategoryList,
} from "../controllers/category.controller.js";
import multer from "multer";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
const upload = multer({
  //   storage: multer.memoryStorage(),
  //   fileFilter: (req, file, cb) => {
  //     if (file.mimetype.startsWith("image/")) {
  //       cb(null, true);
  //     } else {
  //       cb(new Error("Only images are allowed"));
  //     }
  //   },
});

const router = express.Router();

router.post(
  "/admin/add-category",
  upload.single("photo"),
  authMiddleware,
  adminMiddleware,
  addCategory,
);
router.get("/admin/category-photo/:id", getCategoryPhoto);
router.get("/admin/category-list", getCategoryList);

export default router;
