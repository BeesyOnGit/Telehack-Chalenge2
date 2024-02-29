import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema<MessagesType>({
   ChatId:{type:String , required:true},
   SenderId:{type:String , required:true},
   Message:{type:String , required:true},
   CreatedAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});


const MessagesModel: mongoose.Model<MessagesType> = mongoose.model<MessagesType>("Messages", MessagesSchema);
export default MessagesModel;

export type MessagesType = {
      ChatId: string,
      SenderId:string,
      Message:String,
      CreatedAt :Number
};
