"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const userSchema = new mongoose_1.default.Schema({
    fullname: {
        type: zod_1.z.string(),
        required: true,
    },
    email: {
        type: zod_1.z.string().email(),
        required: true,
    },
    mobile: {
        type: zod_1.z.string().regex(/^\d{10}$/),
        required: true,
    },
    password: {
        type: zod_1.z.string().min(8),
        required: true,
    }
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
