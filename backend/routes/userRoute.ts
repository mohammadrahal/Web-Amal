import { Router } from "express";
import { getUsers, register } from "../controllers/userController";

const router: Router = Router();

// Define the route for getting all users
router.get("/getAll", getUsers);
router.post("/register", register);
export default router;
