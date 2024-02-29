import { Request, Response } from "express";
import AgenceModel from "../Models/Agence";

export const addAgence = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { nameAgence, position } = body;

        const add = await AgenceModel.create({
            name: nameAgence,
            position: position,
        });

        if (!add) return res.json({ code: "015" });

        return res.json({ code: "51" });
    } catch (error) {
        console.error(error);
    }
};
