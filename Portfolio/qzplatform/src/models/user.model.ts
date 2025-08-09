import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';
import {IUser} from '../types/user.interface';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isVerified:{
        type: Boolean,
        default: true,
        required: true
    }

},{ timestamps: true});

export default model<IUser>('User', userSchema);