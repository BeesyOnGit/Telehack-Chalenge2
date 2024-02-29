import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema<companyType>({
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

CompanySchema.pre("save", function () {
    this.editedAt = new Date().getTime();
});

const CompanyModel: mongoose.Model<companyType> = mongoose.model<companyType>("company", CompanySchema);
export default CompanyModel;

export type companyType = {
    createdAt: number;
    editedAt: number;
};
