import asyncHandler from "../middleware/asyncHandler.js";
import { pool } from "../config/db.js";
import jwtGenerator from "../utils/jwtGenerator.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { sendWelcomeEmail } from "../utils/emailService.js"; // Assuming 'mailer.js' is in the same directory

// Your main code...

//@desc get all appliacnts
//@route GET  /api/applicants
//@access private/admin
const getAllApplicants = async (req, res) => {
  try {
    const query = "SELECT * FROM  applicants";
    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching jobs." });
  }
};

//@desc get all appliacnts by job_id
//@route GET  /api/applicants/by-job/:job_id
//@access private/admin
const getApplicantsByJobId = async (req, res) => {
  const job_id = req.params.job_id;
  try {
    const query = "SELECT * FROM  applicants where job_id=$1";
    const value = [job_id];
    const { rows } = await pool.query(query, value);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching jobs." });
  }
};

//@desc get all appliacnts by id
//@route GET  /api/applicants/:id
//@access private/admin
const getApplicantsById = async (req, res) => {
  const id = req.params.id;
  try {
    const query = "SELECT * FROM  applicants where id=$1";
    const value = [id];
    const { rows } = await pool.query(query, value);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching jobs." });
  }
};

const getApplicantByApplicantAndJob = async (req, res) => {
  const id = req.params.id;
  const job_id = req.params.job_id;

  try {
    const query = "SELECT * FROM applicants WHERE id = $1 AND job_id = $2";
    const values = [id, job_id];

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Applicant not found for the given job." });
    }

    const applicant = rows[0];
    res.status(200).json(applicant);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the applicant." });
  }
};

//create employee

const createEmployee = async (req, res) => {
  try {
    const {
      personal_email,
      name,
      age,
      email,
      password,
      contact,
      start_date,
      position,
      location,

      bank_name,
      acc_no,
      ifsc_code,
      basic_salary,
      hra,
      conveniene_alloances,
      medical_alloances,
      special_alloances,
      epf,
      health_insurance,
      proffesional_tax,
      tds,
      amtinwords,
      deduct,
      gross,
      netpay,
      profileimg,
    } = req.body;

    const currentDate = new Date().toISOString().split("T")[0];

    const query = `
      INSERT INTO employees (
     
      name,
      age,
      email,
      password,
      contact,
      start_date,
      position,
      location,
      
      bank_name,
      acc_no,
      ifsc_code,
      basic_salary,
      hra,
      conveniene_alloances,
      medical_alloances,
      special_alloances,
      epf,
      health_insurance,
      proffesional_tax,
      tds,
      amtinwords,
      deduct,
      gross,
      netpay,
      profileimg,
      status
      
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,$23,$24,$25,$26)
      RETURNING *;
    `;

    const values = [
      name,
      age,
      email,
      password,
      contact,
      start_date,
      position,
      location,

      bank_name,
      acc_no,
      ifsc_code,
      basic_salary,
      hra,
      conveniene_alloances,
      medical_alloances,
      special_alloances,
      epf,
      health_insurance,
      proffesional_tax,
      tds,
      amtinwords,
      deduct,
      gross,
      netpay,
      profileimg,
      "active",
    ];

    const { rows } = await pool.query(query, values);
    sendWelcomeEmail(personal_email, name, email, password);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the employee." });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const employee_id = req.params.id;
    const {
      name,
      age,
      email,
      password,
      contact,
      start_date,
      status,
      position,
      location,
      emp_no,
      bank_name,
      acc_no,
      ifsc_code,
      basic_salary,
      hra,
      conveniene_alloances,
      medical_alloances,
      special_alloances,
      epf,
      health_insurance,
      proffesional_tax,
      tds,
    } = req.body;

    const currentDate = new Date().toISOString().split("T")[0];

    const query = `
      UPDATE employees
      SET
        name = $1,
        age = $2,
        email = $3,
        password = $4,
        contact = $5,
        start_date = $6,
        status = $7,
        position = $8,
        location = $9,
        emp_no = $10,
        bank_name = $11,
        acc_no = $12,
        ifsc_code = $13,
        basic_salary = $14,
        hra = $15,
        conveniene_alloances = $16,
        medical_alloances = $17,
        special_alloances = $18,
        epf = $19,
        health_insurance = $20,
        proffesional_tax = $21,
        tds = $22
      WHERE id = $23
      RETURNING *;
    `;

    const values = [
      name,
      age,
      email,
      password,
      contact,
      start_date || currentDate,
      status,
      position,
      location,
      emp_no,
      bank_name,
      acc_no,
      ifsc_code,
      basic_salary,
      hra,
      conveniene_alloances,
      medical_alloances,
      special_alloances,
      epf,
      health_insurance,
      proffesional_tax,
      tds,
      employee_id,
    ];

    const { rows } = await pool.query(query, values);

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the employee." });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id; // Get the employee ID from req.params

    const query = `
      DELETE FROM employees
      WHERE id = $1
      RETURNING *;
    `;

    const values = [employeeId];

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      res.status(404).json({ error: "Employee not found." });
    } else {
      res.status(200).json({ message: "Employee deleted successfully." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the employee." });
  }
};

//make employee as admin
const makeEmployeeAsAdmin = async (req, res) => {
  const applicantId = req.params.id;

  try {
    // Check if the employee with the given ID exists and is an applicant (level = 1)
    const checkQuery = "SELECT * FROM employees WHERE id = $1 AND level = 1";
    const checkResult = await pool.query(checkQuery, [applicantId]);

    if (checkResult.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Applicant not found or is not an applicant" });
    }

    // Update the applicant's level to 2 (admin)
    const updateQuery = "UPDATE employees SET level = 2 WHERE id = $1";
    await pool.query(updateQuery, [applicantId]);

    return res
      .status(200)
      .json({ message: "Applicant has been made an admin" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while making the applicant an admin" });
  }
};
//make admin as employee
const makeAdminAsEmployee = async (req, res) => {
  const applicantId = req.params.id;

  try {
    // Check if the employee with the given ID exists and is an applicant (level = 1)
    const checkQuery = "SELECT * FROM employees WHERE id = $1 AND level = 2";
    const checkResult = await pool.query(checkQuery, [applicantId]);

    if (checkResult.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Applicant not found or is not an applicant" });
    }

    // Update the applicant's level to 2 (admin)
    const updateQuery = "UPDATE employees SET level = 1 WHERE id = $1";
    await pool.query(updateQuery, [applicantId]);

    return res
      .status(200)
      .json({ message: "admin has been made as an applicant" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while making the applicant an admin" });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const query = "SELECT * FROM employees";
    const result = await pool.query(query);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching resignations" });
  }
};

const getEmployeeById = async (req, res) => {
  const id = req.params.id;
  try {
    const query = "SELECT * FROM  employees where id=$1";
    const value = [id];
    const { rows } = await pool.query(query, value);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching employee." });
  }
};
const getAllResignationRequests = async (req, res) => {
  try {
    const query = "SELECT * FROM resignation";
    const result = await pool.query(query);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching resignations" });
  }
};
const getResignationById = async (req, res) => {
  const id = req.params.id;
  try {
    const query = "SELECT * FROM resignation where id=$1";
    const result = await pool.query(query, [id]);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching resignations" });
  }
};
const acceptResignation = async (req, res) => {
  const id = req.params.id;
  const experience_letter_url = "jiiji";
  try {
    const query =
      "UPDATE resignation SET status = true, resignation_date = $1, experience_letter_url = $2 WHERE id = $3";
    const result = await pool.query(query, [
      new Date(),
      experience_letter_url,
      id,
    ]);

    return res.status(200).json({ message: "resignation accepted" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating resignations" });
  }
};

export {
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
  getEmployeeById
};
