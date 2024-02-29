import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket } from "socket.io";

export const sockets = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    io.on("connection", async (socket: Socket) => {
        console.log("new client");

        io.on("cusMessage", (data) => {
            socket.broadcast.emit("customerMessage", data);
        });

        io.on("supMessage", (data) => {
            socket.broadcast.emit("supportMessage", data);
        });
    });
};
