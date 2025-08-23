import mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { UserInput } from "../validators/user.validator";
import bcrypt from 'bcrypt';
import {IUser} from "../types/Interfaces/user.interface"



const userSchema = new Schema<IUser>({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }

}, {timestamps: true}
)

//Pre -save hook for hashing password
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

//instance method for comparing Password
userSchema.methods.comparePassword = async function(candidatePassword, this.password):Promise<boolean>{
    return bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model<IUser>("User", userSchema);


export default User;