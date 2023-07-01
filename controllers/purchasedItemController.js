const {PurchasedItem} = require("../models/purchasedItemModel");
const asyncHandler = require('express-async-handler')

const getPurchasedItems = asyncHandler(async (req, res) => {
    try {
        const purchasedItems = await PurchasedItem.find({})
        res.status(200).json(purchasedItems)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const getPurchasedItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const purchasedItem = await PurchasedItem.findById(id)
        res.status(200).json(purchasedItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const createPurchasedItem = asyncHandler(async (req, res) => {
    try {
        const purchasedItem = await PurchasedItem.create(req.body)
        res.status(200).json(purchasedItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const updatePurchasedItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const purchasedItem = await PurchasedItem.findByIdAndUpdate(id, req.body);
        if (!purchasedItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        const updatedPurchasedItem = await purchasedItem.findById(id)
        res.status(200).json(updatedPurchasedItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const deletePurchasedItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const purchasedItem = await PurchasedItem.findByIdAndDelete(id);
        if (!purchasedItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        res.status(200).json(purchasedItem);
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

module.exports = {
    getPurchasedItems,
    getPurchasedItem,
    createPurchasedItem,
    updatePurchasedItem,
    deletePurchasedItem
}