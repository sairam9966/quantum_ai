import asyncHandler from "../middleware/asyncHandler.js";
import { pool } from "../config/db.js";
import jwtGenerator from "../utils/jwtGenerator.js";
import bcrypt from "bcryptjs";

//@desc Login Employee
//@route POST  /api/employee/login
//@access Public

const loginEmployee = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const employee = await pool.query(
      "select * from employees where email=$1 and password=$2",
      [email, password]
    );
    if (employee.rows.length === 0) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    // const validPassword = await bcrypt.compare(password, user.rows[0].password);
    // if (!validPassword) {
    //   return res.status(401).json({ error: "Invalid Credentials" });
    // }

    jwtGenerator(res, employee.rows[0].id);
    res.status(200).json({
      _id: employee.rows[0].id,
      name: employee.rows[0].name,
      email: employee.rows[0].email,
      level: employee.rows[0].level,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

//@desc Logout  cookie
//route get /api/employee/logout
//@access private

const logoutEmployee = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
});

//applyForResignation
const applyResignation = asyncHandler(async (req, res) => {
  const employee_id = req.params.id;
  const { name, email, letter, phone_number, role } = req.body;

  try {
    const employeeQuery = "SELECT * FROM resignation WHERE employee_id = $1";
    const employeeResult = await pool.query(employeeQuery, [employee_id]);

    if (employeeResult.rows.length != 0) {
      return res.status(404).json({ error: "already submitted" });
    }

    const insertQuery = `
      INSERT INTO resignation (employee_id, name, email, letter, phone_number, role)
      VALUES ($1, $2, $3, $4, $5, $6)`;

    await pool.query(insertQuery, [
      employee_id,
      name,
      email,
      letter,
      phone_number,
      role,
    ]);

    return res
      .status(200)
      .json({ message: "Resignation application submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while applying for resignation" });
  }
});

export { loginEmployee, logoutEmployee, applyResignation };
