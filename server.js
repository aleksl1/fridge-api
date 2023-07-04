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
const db = require("./models/index");
const Role = db.role;


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
        initial()
    })
    .catch((err) => {
        console.log(err)
    })

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}