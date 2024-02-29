import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema<ticketType>({
    number: {
        type: Number,
        required: true,
        default: async function () {
            const ticketNumber = await ticketModel.countDocuments();
            return ticketNumber + 1;
        },
    },
    type: {
        type: String,
        required: true,
        default: "commercial",
    },
    date: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});

const ticketModel: mongoose.Model<ticketType> = mongoose.model<ticketType>("ticket", ticketSchema);
export default ticketModel;

export type ticketType = {
    date: number;
    number: number | Promise<number>;
    type: string; // technique | commercial
    user: mongoose.Schema.Types.ObjectId | string;
};
