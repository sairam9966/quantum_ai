import express from "express";
import {
  applyResignation,
  loginEmployee,
  logoutEmployee,
} from "../controllers/employeeController.js";
import { protect } from "../middleware/authorize.js";
const router = express.Router();
router.route("/login").post(loginEmployee);
router.route("/logout").get(protect, logoutEmployee);
router.route("/applyResignation/:id").post(applyResignation);
export default router;
