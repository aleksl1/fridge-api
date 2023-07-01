const express = require('express');
const {
    getShoppingListItems,
    getShoppingListItem,
    createShoppingListItem,
    updateShoppingListItem,
    deleteShoppingListItem
} = require("../controllers/shoppingListItemController");
const router = express.Router()

router.get("/", getShoppingListItems)

router.get("/:id", getShoppingListItem)

router.post('/', createShoppingListItem)
//update base item
router.put("/:id", updateShoppingListItem)

//delete base item
router.delete("/:id", deleteShoppingListItem)

module.exports = router;