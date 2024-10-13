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


export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return; // Exit after sending the response
    }

    // Send success response with user data (excluding password for security)
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        email: user.email,
        password: user.password,
      },
    });
  } catch (error: any) {
    console.error(error);
    
    // Send error response
    res.status(500).json({
      success: false,
      message: "Error while logging in",
      error: error.message,
    });
  }
};

// module.exports = {
//   getUsers,
//   register,
// };
