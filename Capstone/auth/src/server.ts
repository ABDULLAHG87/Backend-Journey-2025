import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./config/db";
import { settings } from "./config/config";
import logger from "./utils/logger"


const PORT = settings.port;

(async () => {
  try {
    await connectDB(); // Wait until DB is connected
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    logger.error("Failed to start server");
    process.exit(1); // Exit if DB fails
  }
})();
