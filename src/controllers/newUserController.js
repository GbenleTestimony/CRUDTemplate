import bcrypt from "bcrypt";
import User from "../models/user.model.js";

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
  