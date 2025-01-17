const express = require('express')
const app = express()
const cors = require("cors")
const ClotherRoute = require("./Routes/ClothersRoute")
const mongoose = require("mongoose")


app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/clothers",ClotherRoute)

const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8080

mongoose.connect(DB_URL).then(() => {
    console.log("connected!!!");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
})


