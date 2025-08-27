import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.route";
const app = express();


// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json()); //For Parsing Json 
app.use(express.urlencoded({extended:true})); //For Parsing form Data
app.use(morgan("dev"));

// Basic Route
app.get("/", (req, res) => {
  res.send("Auth Service is running!");
});

app.use('/api/auth', authRoutes);

export default app;
