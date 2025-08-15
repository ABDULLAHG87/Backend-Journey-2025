import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./config/db";
import { settings } from "./config/config";


const PORT = settings.port;

(async () => {
  try {
    await connectDB(); // Wait until DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1); // Exit if DB fails
  }
})();
