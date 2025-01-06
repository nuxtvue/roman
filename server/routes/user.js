import express from "express";
import {
  deleteUser,
  editUserFromAdminPanel,
  getAllUsers,
  loginUser,
  logoutUser,
  makeAdmin,
  register,
  updateUser,
} from "../controllers/user.js";
import upload from "../middleware/multer.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.get("/getall", isAuthenticated, getAllUsers);
router.post("/login", loginUser);
router.post("/makeadmin", isAuthenticated, makeAdmin);

router.delete("/delete/:id", isAuthenticated, deleteUser);
router.put("/editfromadmin/:id", isAuthenticated, editUserFromAdminPanel);
router.get("/logout", logoutUser);
router.put(
  "/edit/profile",
  upload.single("image"),
  isAuthenticated,
  updateUser
);

export default router;
