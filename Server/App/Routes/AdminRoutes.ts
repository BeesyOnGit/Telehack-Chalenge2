import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { delteUser, editUser } from "../Controllers/UserControllers";
const UserRoutes = express.Router();

UserRoutes.post("/", AuthVerification, editUser);
UserRoutes.delete("/", AuthVerification, delteUser);

export default UserRoutes;
