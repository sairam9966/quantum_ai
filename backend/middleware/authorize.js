import dotenv from "dotenv";
dotenv.config();
import { pool } from "../config/db.js";
import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      // Verify the token using JWT and your secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const queryResult = await pool.query(
        "SELECT  * FROM employees WHERE id = $1",
        [decoded.user.id]
      );

      if (queryResult.rows.length > 0) {
        req.user = queryResult.rows[0];
        next();
      } else {
        res.status(401);
        throw new Error("Not Authorized, user not found");
      }
    } catch (error) {
      console.log("hiiibye");
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.level == 2) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
};

export { protect, admin };
