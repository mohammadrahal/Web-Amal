import { Router } from "express";
import { getUsers, register, login } from "../controllers/userController";

const router: Router = Router();

// Define the route for getting all users
router.get("/getAll", getUsers);
router.post("/register", register);
router.post('/login', login);
export default router;
