const mongoose = require("mongoose");

const baseItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter item name"],
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
            enum: ["fruits", "vegetables", "meats", "beverages", "dairy", "bread", "pasta", "grains", "others"],
            required: [true, "Enter item category"],
        },
        piecesPer100g: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const BaseItem = mongoose.model("BaseItem", baseItemSchema);

module.exports = {BaseItem, baseItemSchema};