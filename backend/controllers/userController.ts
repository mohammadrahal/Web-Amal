import { Request, Response } from "express";
import User from "../models/userModel";

//get all users
export const getUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "All users found",
      data: users,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Error while retrieving data",
      error: error.message,
    });
  }
};

// Register a new user
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    // Create a new user in the database
    const user = await User.create({
      fullName,
      email,
      password,
      phoneNumber,
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: "User added successfully",
      data: user,
    });
  } catch (error: any) {
    console.error(error);

    // Send error response
    res.status(400).json({
      success: false,
      message: "Error while adding user",
      error: error.message,
    });
  }
};

// module.exports = {
//   getUsers,
//   register,
// };
