import mongoose from "mongoose";

const userSchema = new mongoose.Schema<userType>({
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
    passWord: {
        type: String,

        required: true,
    },
    phoneFix: {
        type: String,
        lowercase: true,
        required: true,
    },
    phoneMobil: {
        type: String,
        lowercase: true,
        required: true,
    },
    subscription: {
        type: String,
        lowercase: true,
        required: true,
    },
    endDate: {
        type: Number,
    },
    notification: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
    editedAt: {
        type: Number,
        default: () => {
            return new Date().getTime();
        },
    },
});

userSchema.pre("save", function () {
    this.editedAt = new Date().getTime();
});

const userModel: mongoose.Model<userType> = mongoose.model<userType>("user", userSchema);
export default userModel;

export type userType = {
    firstName: string;
    lastName: string;
    passWord: string;
    email: string;
    phoneMobil: string;
    phoneFix: string;
    subscription: mongoose.Schema.Types.ObjectId | string;
    endDate: Number;
    notification: boolean;
    createdAt: number;
    editedAt: number;
};
