import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema<ChatType>({
   IdReciver:{type:String, required : true},
   IdSender:{type:String , required : true},
   status:{type:Boolean},
   CreatedAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});


const ChatModel: mongoose.Model<ChatType> = mongoose.model<ChatType>("chat", ChatSchema);
export default ChatModel;

export type ChatType = {
    IdSender : string,
    IdReciver:string,
    CreatedAt:number,
    status :boolean,
};
