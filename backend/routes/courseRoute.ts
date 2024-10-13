import { Router } from "express";
import {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController";

const router: Router = Router();

router.get("/getAllCourses", getAllCourses);
router.get("/getById/:id", getCourseById);
router.post("/addCourse", addCourse);
router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

export default router;
