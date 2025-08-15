import User, {IUser} from "../models/user.model";
import bcrypt from "bcrypt";
import logger from "../utils/logger"

export const registerUser = async (data:IUser) => {
    const existingUser = await User.findOne({data.email});

    if (existingUser){
        logger.error("User Already exists");
        throw new Error("Email Alreay exist")
    }

    const newUser = await User.create(data);
    return newUser
}
