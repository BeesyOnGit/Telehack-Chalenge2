import mongoose from "mongoose";

const NotifactionSchema = new mongoose.Schema<NotifactionType>({
   Message:{type:String , required: true} ,
   date:{type:String , required:true},
   CreatedAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});


const NotifactionModel: mongoose.Model<NotifactionType> = mongoose.model<NotifactionType>("Notifaction", NotifactionSchema);
export default NotifactionModel;

export type NotifactionType = {
      Message:string,
      date:String,
      CreatedAt :Number
};
