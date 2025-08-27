import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified:boolen;
   comparePassword(candidatePassword: string): Promise<boolean>;
}
