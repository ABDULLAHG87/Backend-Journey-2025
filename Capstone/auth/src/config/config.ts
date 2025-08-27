import { config } from "dotenv";
import {url, port, str, num, cleanEnv, host, email} from 'envalid'

config();

// function getEnv(key: string): string {
//   const value = process.env[key];

//   if (!value) {
//     throw new Error("Missing Env value");
//   }
//   return value;
// }

// export const settings = {
//   port: getEnv("PORT"),
//   mongoUri: getEnv("MONGO_URL"),
//   jwtSecret: getEnv("JWT_SECRET")
// };

export const settings = cleanEnv(process.env, {
  PORT: port({default : 5000}),
  MONGO_URL: url(),
  JWT_SECRET: str(),
  SMTP_HOST: host(),
  SMTP_PORT: port(),
  SMTP_USER: email(),
  SMTP_PASS: str()
})