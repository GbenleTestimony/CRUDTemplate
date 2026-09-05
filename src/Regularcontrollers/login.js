import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { accessToken, refreshToken } from "../Utils/tokens.js";

export const loginUser = async (req, res) => {
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
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const veri={
      id: user._id,
      name: user.name
    };
    const token = accessToken(veri);
    return res.json(
      {  
       message: 'Success', 
       accessToken: token,
       }
    );
  } catch (err) {
    console.error("login error", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
