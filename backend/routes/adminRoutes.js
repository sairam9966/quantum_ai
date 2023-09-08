import express from "express";
import {
  getAllApplicants,
  getApplicantsByJobId,
  getApplicantsById,
  getApplicantByApplicantAndJob,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  makeEmployeeAsAdmin,
  makeAdminAsEmployee,
  getAllResignationRequests,
  acceptResignation,
  getResignationById,
} from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authorize.js";
const router = express.Router();
router.route("/applicants").get(protect, admin, getAllApplicants);
router
  .route("/applicants/by-job/:job_id")
  .get(protect, admin, getApplicantsByJobId);
router.route("/applicants/:id").get(protect, admin, getApplicantsById);
router
  .route("/applicants/:id/job/:job_id")
  .get(protect, admin, getApplicantByApplicantAndJob);
router.route("/createEmployee").post(createEmployee);
router.route("/updateEmployee/:id").put(updateEmployee);
router.route("/deleteEmployee/:id").delete(deleteEmployee);
router.route("/makeAsAdmin/:id").get(makeEmployeeAsAdmin);
router.route("/makeAsEmployee/:id").get(makeAdminAsEmployee);
router.route("/getAllResignationRequests").get(getAllResignationRequests);
router.route("/acceptResignation/:id").get(acceptResignation);
router.route("/getResignation/:id").get(getResignationById);
export default router;