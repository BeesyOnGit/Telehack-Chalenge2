import express from "express";
import { adminAuthVerification } from "../MiddleWear/ServerFunctions";
import { addNotifcation } from "../Controllers/AddNotification";
const NotificationRoutes = express.Router();

NotificationRoutes.post("/", adminAuthVerification, addNotifcation);

export default NotificationRoutes;
