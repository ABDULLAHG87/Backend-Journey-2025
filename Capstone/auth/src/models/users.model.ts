import mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import IUser from '../types/interfaces/user.interface'


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

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;