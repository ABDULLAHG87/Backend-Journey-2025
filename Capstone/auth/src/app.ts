import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Basic Route
app.get("/", (req, res) => {
  res.send("Auth Service is running!");
});

export default app;