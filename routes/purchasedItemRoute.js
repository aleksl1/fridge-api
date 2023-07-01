const express = require('express');
const {
    getPurchasedItems,
    getPurchasedItem,
    createPurchasedItem,
    updatePurchasedItem,
    deletePurchasedItem
} = require("../controllers/purchasedItemController");
const router = express.Router()

router.get("/", getPurchasedItems)

router.get("/:id", getPurchasedItem)

router.post('/', createPurchasedItem)
//update base item
router.put("/:id", updatePurchasedItem)

//delete base item
router.delete("/:id", deletePurchasedItem)

module.exports = router;