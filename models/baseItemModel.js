const mongoose = require("mongoose");

const baseItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "enter item name"]
        },
        proteins: {
            type: Number,
            required: true,
        },
        carbs: {
            type: Number,
            required: true,
        },
        fats: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: [true, "enter item category"]
        }
    },
    {
        timestamps: true
    }
)

const BaseItem = mongoose.model("BaseItem", baseItemSchema);

module.exports = BaseItem;