import { Response, Request } from "express";
import { Headers, editModelWithSave } from "../MiddleWear/ServerFunctions";
import adminModel from "../Models/Admin";

export const createAdmin = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const newAdmin = await adminModel.create(body);

        if (!newAdmin) {
            return res.json({ code: "07" });
        }

        return res.json({ code: "12" });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const editAdmin = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const admin = await adminModel.findOne({ _id: verifiedID });

        if (!admin) {
            return res.json({ code: "01" });
        }

        editModelWithSave(admin, body);

        const saveChange = await admin.save();

        if (!saveChange) {
            return res.json({ code: "041" });
        }

        return res.json({ code: "21" });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const delteAdmin = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const admin = await adminModel.findOne({ _id: verifiedID });

        if (!admin) {
            return res.json({ code: "01" });
        }

        const deleteMe = await adminModel.deleteOne({ _id: verifiedID });
        if (!deleteMe) {
            return res.json({ code: "040" });
        }
        return res.json({ code: "22" });
    } catch (error) {
        console.log("🚀 ~ delteadmin ~ error:", error);
    }
};
