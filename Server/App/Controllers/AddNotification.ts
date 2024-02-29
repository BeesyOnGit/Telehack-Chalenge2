import { Request, Response } from "express";
import NotiModel from "../Models/Notification";

export const addNotifcation = async (req: Request, res: Response) => {
    const { body } = req;
    const { date, message } = body;
    try {
        const addNotification = await NotiModel.create({
            date: new Date().getTime(),
            Message: message,
        });
        if (!addNotification) {
            return res.json({ code: "031" });
        }

        return res.json({ code: "61" });
    } catch (err) {
        console.log(err);
    }
};
