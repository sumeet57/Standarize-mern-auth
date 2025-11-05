import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/authenticate.js";
import {
  validateLogin,
  validateObjectId,
  validateRegister,
} from "../middlewares/validate.js";

const userRouter = express.Router();

userRouter.get("/", authenticate, validateObjectId, getUserProfile);
userRouter.post("/login", validateLogin, loginUser);
userRouter.post("/register", validateRegister, registerUser);

export default userRouter;
