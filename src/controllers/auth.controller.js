import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { accessToken, refreshToken } from "../utils/generateToken.js";

export const loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const varAccess = accessToken(user.id);
    return res.json(
      { message: "Login successful" },
      { accessToken: varAccess }
    );
  } catch (err) {
    console.error("login error", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
export const updateUser = async (req, res) => {
  // Implementation for updating user details
  const { name, newName, newPassword } = req.body;

  try {
    const possible = await User.findOne({name})
    if(possible){
      console.log('on it')
      const newHash = await bcrypt.hash(newPassword, 10);
      console.log(possible);
      const updatedUser = await User.updateOne({_id: possible._id}, {name: newName, password: newHash})
        const updateResponse ={
        name: updatedUser.name,
        _id: updatedUser._id
      };
      return res.status(201).json({ message: "Password updated", response: updateResponse});
    }    
  } catch (error) {
    console.error("Error Dey", error);
    return res.status(500).json({ message: "Something is wrong" });
  }
};
export const createUser = async (req, res) => {
  const {name, password} = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exists = await User.findOne({ name });
    if (exists) {
      return res.status(409).json({ message: "Name already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, password: hashedPassword });
    const userResponse = {
      _id: newUser._id,
      name: newUser.name,
    };
    return res.status(201).json({
      message: "user created successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Error Dey", error);
    return res.status(500).json({ message: "Something is wrong" });
  }
};
