import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import cryptoJs from "crypto-js";
import dotenv from "dotenv";
import { EncriptedStringsCompare, TokenVerifier, generateToken } from "../MiddleWear/ServerFunctions";
import userModel, { userType } from "../Models/Users";
dotenv.config();

export const login = async (req: Request, res: Response) => {
    const { body }: { body: userType } = req;
    const { phoneFix, passWord } = body;

    try {
        const user = await userModel.findOne({ phoneFix });
        if (!user) {
            return res.json({ code: "01" });
        }
        const { passWord: passDb, _id } = user;

        if (!EncriptedStringsCompare(passWord, passDb)) {
            return res.json({ code: "02" });
        }

        return res.json({ code: "12", token: generateToken(_id.toString()) });
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
    }
};
export const Register = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createUser = await userModel.create(body);
        if (!createUser) {
            return res.json({ code: "07" });
        }

        return res.json({ code: "12" });
    } catch (error) {
        console.log("🚀 ~ Register ~ error:", error);
    }
};
