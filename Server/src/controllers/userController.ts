import { Request, Response, RequestHandler } from "express"
import User from '../model/userModel';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { JWT_USER_PASSWORD } from "../config/config";

interface signupRequestBody {
    fullname: string,
    email: string,
    mobile: string,
    password: string,
}

interface signinRequestBody {
  email: string,
  password: string,
}

export const signup: RequestHandler = async (req: Request, res: Response) => {
    try {
        const {fullname, email, mobile, password}: signupRequestBody = req.body;

        const user = await User.findOne({email});
        if(user){
            res.status(400).json({
                message: "User already exist"
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({fullname, email, mobile, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User registered successfully!"});
        return;

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
        return;
    }
}

export const signin: RequestHandler = async (req: Request, res: Response) => {
  try {
    const {email, password}: signinRequestBody = req.body;

    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user?.password as string);
    if (!user || !isPasswordValid){
        res.status(400).json({
        message: "Invalid email or password",
      });
      return;
    }

    const token = jwt.sign({id: user._id}, JWT_USER_PASSWORD);
    res.status(200).json({ token, message: "Login Successful" });
    return;
  } catch (error) {
    res.status(500).json({message: "Internal Server Error", error});
    return; 
  }
};