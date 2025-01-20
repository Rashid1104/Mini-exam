const express = require('express')
const app = express()
const mongoose = require("mongoose")
const PORT = 8080
const cors = require("cors")
const StoreRouter = require("./Route/StoreRoute")
const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors())
app.use(express.json())
app.use("/stores",StoreRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(DB_URL).then(()=>{
    console.log("connected!!!");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
})