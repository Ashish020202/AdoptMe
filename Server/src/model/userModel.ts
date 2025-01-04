import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  fullname: string;
  email: string;
  mobile: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
