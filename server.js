require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const baseItemRoute = require('./routes/baseItemRoute')
const shoppingListItemRoute = require('./routes/shoppingListItemRoute')
const purchasedItemRoute = require('./routes/purchasedItemRoute')
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require('cors')
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND
const OWNER = process.env.OWNER

const corsOptions = {
    origin: [FRONTEND, OWNER],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/baseItems', baseItemRoute)
app.use('/api/shoppingListItems', shoppingListItemRoute)
app.use('/api/purchasedItems', purchasedItemRoute)

app.get('/', (req, res) => {
    console.log("Hello node api");
})

app.use(errorMiddleware)


mongoose
    .connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("node api app running on port 3000");
        })
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log(err)
    })