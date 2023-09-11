import express from "express";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

connectDB();

app.use("/api/employee", employeeRoutes);
app.use("/api", adminRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
