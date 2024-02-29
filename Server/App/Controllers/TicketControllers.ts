import { Response, Request } from "express";
import { Headers, editModelWithSave } from "../MiddleWear/ServerFunctions";
import ticketModel from "../Models/Tickets";

export const getTicketListe = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const newAdmin = await ticketModel.find();

        if (!newAdmin) {
            return res.json({ code: "010" });
        }

        return res.json({ code: "33", data: newAdmin });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const createTicket = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const newAdmin = await ticketModel.create(body);

        if (!newAdmin) {
            return res.json({ code: "07" });
        }

        return res.json({ code: "34" });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const editTicket = async (req: Request, res: Response) => {
    const { params, headers: hd, body }: any = req;
    const headers: Headers = hd;
    const { ticket } = params;
    try {
        const admin = await ticketModel.findOne({ _id: ticket });

        if (!admin) {
            return res.json({ code: "010" });
        }

        editModelWithSave(admin, body);

        const saveChange = await admin.save();

        if (!saveChange) {
            return res.json({ code: "011" });
        }

        return res.json({ code: "31" });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const deleteTicket = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const admin = await ticketModel.findOne({ _id: verifiedID });

        if (!admin) {
            return res.json({ code: "010" });
        }

        const deleteMe = await ticketModel.deleteOne({ _id: verifiedID });
        if (!deleteMe) {
            return res.json({ code: "013" });
        }
        return res.json({ code: "32" });
    } catch (error) {
        console.log("🚀 ~ delteadmin ~ error:", error);
    }
};
