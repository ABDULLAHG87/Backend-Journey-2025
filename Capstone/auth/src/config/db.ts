import mongoose from "mongoose";
import { settings } from "./config";

// Database Connection
async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(settings.mongoUri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection Error:", err);
    throw err;
  }
}

export default connectDB;
