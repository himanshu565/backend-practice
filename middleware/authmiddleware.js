import jwt from "jsonwebtoken";
import { env } from "process";

export default function authMiddleware(req, res, next){
    // 1. get authorization header
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message: "Authorization header missing "
        })
    }
    //  2. check for bearer token
    const parts  = authHeader.split(" ");
    
    if(parts.length !==2 || parts[0] !== "Bearer"){
        return res.status(401).json({
            message: " invalid authorization header format",
        });
    }
    const token = parts[1];

    // 3 verify jwt token
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // 4. attach user information to request }
    req.user = decoded;

     // 5. Continue to route
    next();

}
catch(error){
    return res.status(401).json({
        message: "invalid or expired token",
    })
}}