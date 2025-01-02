import mongoose, { Document, Schema } from "mongoose";
import { z } from "zod";

interface IUser extends Document {
    fullname: string,
    email: string,
    mobile: string,
    password: string,
}

const userSchema: Schema = new mongoose.Schema({
    fullname : {
        type : z.string(),
        required : true,
    },

    email: {
        type: z.string().email(),
        required: true,
    },

    mobile: {
        type: z.string().regex(/^\d{10}$/),
        required: true,
    },

    password: {
        type: z.string().min(8),
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
export default User;