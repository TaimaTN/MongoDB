import { Router } from "express";
import * as userController from "./controller.js";
import authenticate from "../../middelware/authentication.js";
const route =Router();

route.get('/getall',userController.getUsers);
route.get('/byid',userController.userById);
route.delete('/delete', authenticate, userController.deleteUser);
route.patch('/update', authenticate,userController.updateUser);

export default route;
