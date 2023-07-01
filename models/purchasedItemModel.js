const mongoose = require("mongoose");
const {shoppingListItemSchema} = require('./shoppingListItemModel')

const purchasedItemExtensionSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true,
        },
        purchaseDate: {
            type: String,
            required: true,
        },
        wasUsed: {
            type: Boolean,
            required: true
        }
    },
);

const purchasedItemSchema = shoppingListItemSchema.add(purchasedItemExtensionSchema);

const PurchasedItem = mongoose.model("ShoppingListItem", purchasedItemSchema);

module.exports = {PurchasedItem};