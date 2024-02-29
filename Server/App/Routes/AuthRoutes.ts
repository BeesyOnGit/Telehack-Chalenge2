import express from "express";
import { login, Register } from "../Controllers/AuthControllers";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
const AuthRoutes = express.Router();

AuthRoutes.post("/login", login);
AuthRoutes.post("/register", Register);

export default AuthRoutes;
