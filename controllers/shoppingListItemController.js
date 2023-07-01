const {ShoppingListItem} = require("../models/shoppingListItemModel");
const asyncHandler = require('express-async-handler')

const getShoppingListItems = asyncHandler(async (req, res) => {
    try {
        const shoppingListItems = await ShoppingListItem.find({})
        res.status(200).json(shoppingListItems)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const getShoppingListItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const shoppingListItem = await ShoppingListItem.findById(id)
        res.status(200).json(shoppingListItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const createShoppingListItem = asyncHandler(async (req, res) => {
    try {
        const shoppingListItem = await ShoppingListItem.create(req.body)
        res.status(200).json(shoppingListItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const updateShoppingListItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const shoppingListItem = await ShoppingListItem.findByIdAndUpdate(id, req.body);
        if (!shoppingListItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        const updatedShoppingListItem = await shoppingListItem.findById(id)
        res.status(200).json(updatedShoppingListItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const deleteShoppingListItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const shoppingListItem = await ShoppingListItem.findByIdAndDelete(id);
        if (!shoppingListItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        res.status(200).json(shoppingListItem);
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

module.exports = {
    getShoppingListItems,
    getShoppingListItem,
    createShoppingListItem,
    updateShoppingListItem,
    deleteShoppingListItem
}