import mongoose from "mongoose";

const adminSchema = new mongoose.Schema<adminType>({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
    },
    lastName: {
        type: String,
        lowercase: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    },

    createdAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
    passWord: {
        type: String,
        required: true,
    },
    editedAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});

adminSchema.pre("save", function () {
    this.editedAt = new Date().getTime();
});

const adminModel: mongoose.Model<adminType> = mongoose.model<adminType>("admin", adminSchema);
export default adminModel;

export type adminType = {
    firstName: string;
    lastName: string;
    passWord: string;
    email: string;
    createdAt: number;
    editedAt: number;
};
