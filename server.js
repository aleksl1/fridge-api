require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const baseItemRoute = require('./routes/baseItemRoute')
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require('cors')
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND
const ADMIN_PANEL = process.env.ADMIN_PANEL

// const corsOptions = {
//     origin: [FRONTEND,ADMIN_PANEL] /no slash at the end of url,
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))
app.use(cors)
app.use(express.json())

app.use('/api/baseItems', baseItemRoute)

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