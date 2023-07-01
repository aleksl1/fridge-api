const mongoose = require("mongoose");
const {baseItemSchema} = require('./baseItemModel')

const shoppingListItemExtensionSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            enum: ["pcs", "grams"], // Replace with the actual unit types
            required: true,
        },
    },
);

const shoppingListItemSchema = baseItemSchema.add(shoppingListItemExtensionSchema);

const ShoppingListItem = mongoose.model("ShoppingListItem", shoppingListItemSchema);

module.exports = {ShoppingListItem, shoppingListItemSchema};