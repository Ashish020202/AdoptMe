// import { NextFunction, Request, Response } from 'express';
// import jwt from "jsonwebtoken";
// import { JWT_USER_PASSWORD } from "../config/config";

// export function userMiddleware(req: Request, res: Response, next: NextFunction) {
//     const token = req.headers.token;
//     const decoded = jwt.verify(token as string, JWT_USER_PASSWORD);

//     if(decoded){
//         req.userId = decoded.id;
//         next();
//     } else{
//         res.status(401).json({message: "Unauthorized user"});
//     }
// }