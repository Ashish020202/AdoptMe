"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email, mobile, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        if (user) {
            res.status(400).json({
                message: "User already exist"
            });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = new userModel_1.default({ fullname, email, mobile, password: hashedPassword });
        yield newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
        return;
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        const isPasswordValid = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!user || !isPasswordValid) {
            res.status(400).json({
                message: "Invalid email or password",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.JWT_USER_PASSWORD);
        res.status(200).json({ token, message: "Login Successful" });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
        return;
    }
});
exports.signin = signin;
