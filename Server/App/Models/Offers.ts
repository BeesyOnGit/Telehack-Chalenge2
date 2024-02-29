import mongoose from "mongoose";

const offerSchema = new mongoose.Schema<offerType>({
    offerName: {
        type: String,
        lowercase: true,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});

const offerModel: mongoose.Model<offerType> = mongoose.model<offerType>("offer", offerSchema);
export default offerModel;

export type offerType = {
    offerName: string;
    offerPrice: number;
    createdAt: number;
};
