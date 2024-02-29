import express from "express";
import { adminAuthVerification } from "../MiddleWear/ServerFunctions";
import { addAgence } from "../Controllers/AddAgence";
const AgenceRoutes = express.Router();

AgenceRoutes.post("/", adminAuthVerification, addAgence);

export default AgenceRoutes;
