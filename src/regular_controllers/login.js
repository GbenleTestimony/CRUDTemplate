import User from "../models/users.js";
import Token from '../models/refresh_token.js';
import bcrypt from "bcryptjs";

import { accessToken, refreshToken } from "../utils/tokens.js";


export const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const user = await User.findOne({ name });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const payload={
      id: user._id,
      name: user.name
    };


    const aToken = accessToken(payload);
    const rToken = refreshToken(payload);

    const storeToken = await Token.create({rToken});
    if(!storeToken){
      console.log('could not store refresh token')
    }

    res.cookie('refreshToken', rToken,{
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 10 * 24 * 60 * 1000
    })
    return res.json(
      {  
       message: 'Success', 
       accessToken: aToken,
       }
    );
  } catch (err) {
    console.error("login error", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
