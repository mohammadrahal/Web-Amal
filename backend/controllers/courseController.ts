import { Request, Response } from "express";
import Course from "../models/courseModel"; // Assuming you have the model in a models folder
import mongoose from "mongoose";

// Get all courses
export const getAllCourses = async (_: Request, res: Response): Promise<void> => {
    try {
      const courses = await Course.find({});
      res.status(200).json({
        success: true,
        message: "All Courses Found",
        data: courses,
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


  export const getCourseById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid course ID" });
        return; // return after sending a response
      }
  
      const course = await Course.findById(id);
  
      if (!course) {
        res.status(404).json({ error: "Course not found" });
        return;
      }
  
      res.status(200).json({
        success: true,
        message: "Course added successfully",
        data: course,
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  };
  
  // Add a new course
  export const addCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const { courseName, duration, type, additionalInfo } = req.body;
  
      const newCourse = new Course({
        courseName,
        duration,
        type,
        additionalInfo,
      });
  
      const savedCourse = await newCourse.save();
      res.status(200).json({
        success: true,
        message: "Course added successfully",
        data: savedCourse,
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update course by ID
  export const updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { courseName, duration, type, additionalInfo } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid course ID" });
        return;
      }
  
      const updatedCourse = await Course.findByIdAndUpdate(
        id,
        { courseName, duration, type, additionalInfo },
        { new: true, runValidators: true }
      );
  
      if (!updatedCourse) {
        res.status(404).json({ error: "Course not found" });
        return;
      }
  
      res.status(200).json(updatedCourse);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  };
  
  // Delete course by ID
  export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid course ID" });
        return;
      }
  
      const deletedCourse = await Course.findByIdAndDelete(id);
  
      if (!deletedCourse) {
        res.status(404).json({ error: "Course not found" });
        return;
      }
  
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  };