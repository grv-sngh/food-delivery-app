import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            require: true
        }

    },
    {
        timestamps: true,
    }
)

export const Food = mongoose.model('food', foodSchema);