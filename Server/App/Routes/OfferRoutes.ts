import express from "express";
import { adminAuthVerification } from "../MiddleWear/ServerFunctions";
import { createOffer } from "../Controllers/OffersControllers";
const OfferRoutes = express.Router();

OfferRoutes.post("/", adminAuthVerification, createOffer);

export default OfferRoutes;
