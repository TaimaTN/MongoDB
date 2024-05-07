import { Router } from "express";
import * as AuthController from "./controller.js";
const route= Router();
route.post('/signup',AuthController.signUp);
route.post('/signin',AuthController.signIn);
export default route;