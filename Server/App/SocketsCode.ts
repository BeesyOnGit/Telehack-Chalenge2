import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const sockets = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    let locationBasedSockets: any = {};

    io.on("connection", async (socket) => {
        try {
        } catch (error) {
            console.log("🚀 ~ file: App.ts:74 ~ io.on ~ error:", error);
        }
    });
};
