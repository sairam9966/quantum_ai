import express from "express";
import { protect, admin } from "../middleware/authorize.js";

import {
  applyJob,
  getAllJobs,
  getJobById,
  postNewJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
const router = express.Router();
router.route("/apply/:id").post(applyJob);
router
  .route("/:id")
  .get(getJobById)
  .put(protect, admin, updateJob)
  .delete(protect, admin, deleteJob);
router.route("/").get(getAllJobs).post(postNewJob);
export default router;
