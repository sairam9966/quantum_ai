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
  getAllEmployees,
  getEmployeeById,
} from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authorize.js";
const router = express.Router();
router.route("/applicants").get(getAllApplicants);
router.route("/applicants/by-job/:job_id").get(getApplicantsByJobId);
router.route("/applicants/:id").get(getApplicantsById);
router
  .route("/applicants/:id/job/:job_id")
  .get(protect, admin, getApplicantByApplicantAndJob);
router.route("/createEmployee").post(createEmployee);
router.route("/updateEmployee/:id").put(updateEmployee);
router.route("/deleteEmployee/:id").delete(deleteEmployee);
router.route("/employees").get(getAllEmployees);
router.route("/employees/:id").get(getEmployeeById);
router.route("/makeAsAdmin/:id").get(makeEmployeeAsAdmin);
router.route("/makeAsEmployee/:id").get(makeAdminAsEmployee);
router.route("/getAllResignationRequests").get(getAllResignationRequests);
router.route("/acceptResignation/:id").get(acceptResignation);
router.route("/getResignation/:id").get(getResignationById);
export default router;
