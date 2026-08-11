import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../data/users.js";
import express from "express";

const router  = express.Router();

router.post("/login", async (req, res)=>{
    const {email, password} =req.body;

    // 1. find user
    const user = users.find((user)=> user.email === email);
    if(!user){
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }
    // 2. compare password
    const isPasswordCorrect = await bcrypt.compare9
})
