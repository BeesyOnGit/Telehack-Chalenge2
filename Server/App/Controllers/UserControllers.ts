import { Response, Request } from "express";
import { Headers, editModelWithSave } from "../MiddleWear/ServerFunctions";
import userModel from "../Models/Users";

export const getUserDetails = async (req: Request, res: Response) => {
    const { body, headers: hd, params }: any = req;
    const headers: Headers = hd;
    const { id } = params;
    const { verifiedID } = headers;
    try {
        const user = await userModel.findOne({ _id: id });

        if (!user) {
            return res.json({ code: "01" });
        }

        return res.json({ code: "23", data: user });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const editUser = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const user = await userModel.findOne({ _id: verifiedID });

        if (!user) {
            return res.json({ code: "01" });
        }

        editModelWithSave(user, body);

        const saveChange = await user.save();

        if (!saveChange) {
            return res.json({ code: "041" });
        }

        return res.json({ code: "21" });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const delteUser = async (req: Request, res: Response) => {
    const { body, headers: hd }: any = req;
    const headers: Headers = hd;
    const { verifiedID } = headers;
    try {
        const user = await userModel.findOne({ _id: verifiedID });

        if (!user) {
            return res.json({ code: "01" });
        }

        const deleteMe = await userModel.deleteOne({ _id: verifiedID });
        if (!deleteMe) {
            return res.json({ code: "040" });
        }
        return res.json({ code: "22" });
    } catch (error) {
        console.log("🚀 ~ delteUser ~ error:", error);
    }
};
