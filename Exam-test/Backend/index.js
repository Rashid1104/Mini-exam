const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const DishRouter = require("./Route/DishRoutes")
const port = 3000

app.use(cors())
app.use(express.json())

const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8080

app.use("/dishes",DishRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(DB_URL).then(()=> {
    console.log("connected!!!");
    app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
})