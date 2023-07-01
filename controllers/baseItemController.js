const {BaseItem} = require("../models/baseItemModel");
const asyncHandler = require('express-async-handler')

const getBaseItems = asyncHandler(async (req, res) => {
    try {
        const baseItems = await BaseItem.find({})
        res.status(200).json(baseItems)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const getBaseItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const baseItem = await BaseItem.findById(id)
        res.status(200).json(baseItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const createBaseItem = asyncHandler(async (req, res) => {
    try {
        const baseItem = await BaseItem.create(req.body)
        res.status(200).json(baseItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const updateBaseItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const baseItem = await BaseItem.findByIdAndUpdate(id, req.body);
        if (!baseItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        const updatedBaseItem = await BaseItem.findById(id)
        res.status(200).json(updatedBaseItem)
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

const deleteBaseItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const baseItem = await BaseItem.findByIdAndDelete(id);
        if (!baseItem) {
            res.status(404);
            throw new Error({message: `cant find item with id ${id}`})
        }
        res.status(200).json(baseItem);
    } catch (err) {
        res.status(500);
        throw new Error(err.message)
    }
})

module.exports = {getBaseItems, getBaseItem, createBaseItem, updateBaseItem, deleteBaseItem}