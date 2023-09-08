import asyncHandler from "../middleware/asyncHandler.js";
import { pool } from "../config/db.js";

//@desc applyJob
//route post /api/jobs/:id
//@access public

const applyJob = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, phone, resume_url, cover_letter } =
    req.body;
  let job_id = req.params.id;
  try {
    const applicant = await pool.query(
      "SELECT * FROM applicants where email=$1 and job_id=$2",
      [email, job_id]
    );

    if (applicant.rows.length > 0) {
      return res.status(401).json("You are already applied for this job");
    }
    pool.query(
      "INSERT INTO applicants (first_name, last_name,email,phone_number,resume_url,cover_letter,job_id) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *",
      [first_name, last_name, email, phone, resume_url, cover_letter, job_id],
      (error, results) => {
        if (error) {
          console.error("Error inserting data into the database", error);
          return res
            .status(500)
            .json({ message: "Error inserting data into the database." });
        }

        res.status(200).json({
          _id: results.rows[0].id,
          name: results.rows[0].first_name,
          email: results.rows[0].email,
        });
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error inserting data into the applicants." });
  }
});

//@desc get all jobs
//@route GET  /api/jobs
//@access Public
const getAllJobs = async (req, res) => {
  try {
    const query = "SELECT * FROM  jobs";
    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching jobs." });
  }
};

//@desc get all jobs
//@route GET  /api/jobs/:id
//@access Public
const getJobById = async (req, res) => {
  let job_id = req.params.id;
  try {
    const { rows } = await pool.query("SELECT * FROM jobs WHERE id = $1", [
      job_id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    const job = rows[0]; // Assuming that the query returns only one row

    res.status(200).json(job);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};

//@desc post new job
//@route POST  /api/jobs
//@access  private admin

const postNewJob = async (req, res) => {
  try {
    // ... (same as before)
    const {
      role_name,
      division_id,
      locations,
      position_type,
      job_description,
      required_skills,
      responsibilities,
      additional_info,
      reviewed_by,
      approved_by,
      posting_date,
      expiration_date,
    } = req.body;

    const query = `
      INSERT INTO jobs (
        role_name,
        division_id,
        locations,
        position_type,
        job_description,
        required_skills,
        responsibilities,
        additional_info,
        reviewed_by,
        approved_by,
        posting_date,
        expiration_date
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *;
    `;

    const values = [
      role_name,
      division_id,
      locations,
      position_type,
      job_description,
      required_skills,
      responsibilities,
      additional_info,
      reviewed_by,
      approved_by,
      posting_date,
      expiration_date,
    ];

    const { rows } = await pool.query(query, values);

    res.status(201).json(rows[0]);
  } catch (error) {
    if (
      error.code === "23505" &&
      error.constraint === "unique_job_role_division_date"
    ) {
      res.status(400).json({
        error:
          "Job with the same role, division, and posting date already exists.",
      });
    } else {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while posting the job." });
    }
  }
};

//@desc update job
//@route PUT /api/jobs/:id
//@access  private admin
const updateJob = async (req, res) => {
  try {
    const {
      role_name,
      division_id,
      locations,
      position_type,
      job_description,
      required_skills,
      responsibilities,
      additional_info,
      reviewed_by,
      approved_by,
      posting_date,
      expiration_date,
    } = req.body;

    const job_id = req.params.id; // Assuming you're passing the job ID in the URL

    const query = `
      UPDATE jobs
      SET
        role_name = $1,
        division_id = $2,
        locations = $3,
        position_type = $4,
        job_description = $5,
        required_skills = $6,
        responsibilities = $7,
        additional_info = $8,
        reviewed_by = $9,
        approved_by = $10,
        posting_date = $11,
        expiration_date = $12
      WHERE id = $13
      RETURNING *;
    `;

    const values = [
      role_name,
      division_id,
      locations,
      position_type,
      job_description,
      required_skills,
      responsibilities,
      additional_info,
      reviewed_by,
      approved_by,
      posting_date,
      expiration_date,
      job_id,
    ];

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      res.status(404).json({ error: "Job not found." });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the job." });
  }
};

//@desc delete job
//@route DELETE /api/jobs/:id
//@access  private admin
const deleteJob = async (req, res) => {
  try {
    const job_id = req.params.id; // Assuming you're passing the job ID in the URL

    const query = `
      DELETE FROM jobs
      WHERE id = $1
      RETURNING *;
    `;

    const { rows } = await pool.query(query, [job_id]);

    if (rows.length === 0) {
      res.status(404).json({ error: "Job not found." });
    } else {
      res.status(200).json({ message: "Job deleted successfully." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the job." });
  }
};

export { applyJob, getAllJobs, getJobById, postNewJob, updateJob, deleteJob };
