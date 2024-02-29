import mongoose from "mongoose";

const AgenceSchema = new mongoose.Schema<AgenceType>({
   name:{type:String},
   position:{type:String}
});


const AgenceModel: mongoose.Model<AgenceType> = mongoose.model<AgenceType>("Agence", AgenceSchema);
export default AgenceModel;

export type AgenceType = {
    name : string,
    position:string,
};
