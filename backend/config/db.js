import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  // database: "project_labai",
  // password: "akhil123",
  database: "quantum_ai",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// const pool = new Pool({
//   user: "postgres", // Replace with your AWS database username
//   host: "qa.cmvaowe6n6dg.us-east-1.rds.amazonaws.com",
//   port: 5432, // Ensure this matches your ds.amazonaws.com", // Replace with your AWS instance hostname or IP
//   database: "quantumai", // Replace with the name of your AWS database
//   password: process.env.DB_PASSWORD, // ReAWS instance's PostgreSQL port
// });

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");
    client.release(); // Release the client back to the pool after connecting
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
};

export default connectDB;
export { pool };
