import express from "express";
import { adminAuthVerification } from "../MiddleWear/ServerFunctions";
import { delteUser, editUser } from "../Controllers/UserControllers";
import { createAdmin, deleteAdmin, editAdmin, getAdminListe } from "../Controllers/AdminControllers";
const AdminRoutes = express.Router();

AdminRoutes.get("/", adminAuthVerification, getAdminListe);
AdminRoutes.post("/edit", adminAuthVerification, editAdmin);
AdminRoutes.post("/", adminAuthVerification, createAdmin);
AdminRoutes.delete("/", adminAuthVerification, deleteAdmin);

export default AdminRoutes;
