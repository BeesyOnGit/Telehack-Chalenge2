import { Request, Response } from "express";
import offerModel from "../Models/Offers";

export const createOffer = async (req: Request, res: Response) => {
    const { body } = req;
    const { date, message } = body;
    try {
        const createOffer = await offerModel.create(body);
        if (!createOffer) {
            return res.json({ code: "028" });
        }

        return res.json({ code: "41" });
    } catch (err) {
        console.log(err);
    }
};
