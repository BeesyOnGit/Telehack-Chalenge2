import express from "express";
import { adminAuthVerification } from "../MiddleWear/ServerFunctions";
import { createTicket, deleteTicket, editTicket, getTicketListe } from "../Controllers/TicketControllers";
const TicketRoutes = express.Router();

TicketRoutes.get("/", adminAuthVerification, getTicketListe);
TicketRoutes.post("/", adminAuthVerification, createTicket);
TicketRoutes.post("/:ticket", adminAuthVerification, editTicket);
TicketRoutes.delete("/", adminAuthVerification, deleteTicket);

export default TicketRoutes;
