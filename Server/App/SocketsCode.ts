import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { verrifiySocket } from "./MiddleWear/ServerFunctions";

export const sockets = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    let locationBasedSockets: any = {};

    io.on("connection", async (socket) => {
        try {
            const token: any = socket.handshake.headers.token;
            locationBasedSockets = await verrifiySocket(locationBasedSockets, token!, socket.id);
        } catch (error) {
            console.log("🚀 ~ file: App.ts:74 ~ io.on ~ error:", error);
        }
    });
};
