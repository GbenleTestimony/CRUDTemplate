import bcrypt from "bcrypt";
import User from "../models/users.js";

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
