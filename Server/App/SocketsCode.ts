import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
// import { verrifiySocket } from "./MiddleWear/ServerFunctions";
// import { myEmitter } from "./App";
import { Socket } from 'socket.io';

export const sockets = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    let locationBasedSockets: any = {};
    let onlineUsers: { UserId: string; socketId: string }[] = [];

io.on("connection", async (socket: Socket) => {
    try {
        console.log('Id Socket ', socket.id);
    } catch (err) {
        console.log("Validation error is ", err);
    }

    socket.on("sendMessage", (message: any) => { 
    const user = onlineUsers.find((user) => user.UserId == message.recipientId);

    if (user) {
        io.to(user.socketId).emit("getMessage", message.newMessage);
        // io.to(user.socketId).emit("getNotification", { 
        //     senderId: message.newMessage.Sender,
        //     isRead: false,
        //     date: new Date(),
        //     userR: user.UserId 
        // });
        console.log("message =>", message.newMessage.Sender);
    }
});
socket.on('disconnect',()=>{
    onlineUsers = onlineUsers.filter((e)=> e.socketId != socket.id)
    io.emit("getOnlineUsers",onlineUsers)
    
  })
});
};






//    try {
//         myEmitter.on("orderUpdate", () => {
//             io.emit("orderUpdate");
//         });
//         myEmitter.on("newOrder", () => {
//             io.emit("newOrder");
//         });
//         myEmitter.on("orderDelete", () => {
//             io.emit("orderDelete");
//         });

//         myEmitter.on("qteNotif", (data: any[]) => {
//             if (data.length == 0) {
//                 return io.emit("qteNotif", undefined);
//             }

//             let locations: any[] = [];

//             data.forEach((element) => {
//                 locations.push(element.location);
//             });

//             for (const notif of data) {
//                 const { location, number } = notif;
//                 for (const id in locationBasedSockets) {
//                     if (location == locationBasedSockets[id]) {
//                         const socketById = io.sockets.sockets.get(id);
//                         if (socketById) {
//                             socketById.emit("qteNotif", number);
//                         }
//                     }
//                     if (locationBasedSockets[id] == "all") {
//                         const socketById = io.sockets.sockets.get(id);
//                         if (socketById) {
//                             const total = data.reduce((prev, curr) => {
//                                 if (curr.number) {
//                                     return prev + curr.number;
//                                 }
//                             }, 0);
//                             socketById.emit("qteNotif", total);
//                         }
//                     }
//                 }
//             }

//             for (const id in locationBasedSockets) {
//                 if (!locations.includes(locationBasedSockets[id]) && locationBasedSockets[id] != "all") {
//                     const socketById = io.sockets.sockets.get(id);
//                     if (socketById) {
//                         socketById.emit("qteNotif", undefined);
//                     }
//                 }
//             }
//         });
//     } catch (error) {
//         console.log("🚀 ~ file: SocketsCode.ts:23 ~ sockets ~ error:", error);
//     }












