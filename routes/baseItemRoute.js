const express = require('express');
const BaseItem = require("../models/baseItemModel")
const {
    getBaseItems,
    getBaseItem,
    createBaseItem,
    updateBaseItem,
    deleteBaseItem
} = require("../controllers/baseItemController");
const router = express.Router()

router.get("/", getBaseItems)

router.get("/:id", getBaseItem)

router.post('/', createBaseItem)
//update base item
router.put("/:id", updateBaseItem)

//delete base item
router.delete("/:id", deleteBaseItem)

module.exports = router;