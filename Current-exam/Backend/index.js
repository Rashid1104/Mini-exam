const express = require('express')
const app = express()
const mongoose = require("mongoose")
const ArivallsRouter = require("./Route/ArivallsRoute")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/arivalls", ArivallsRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8080

mongoose.connect(DB_URL).then(() => {
    console.log("connected!!!");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })

})