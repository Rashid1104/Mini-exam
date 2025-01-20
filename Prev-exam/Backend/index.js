const express = require('express')
const app = express()
const mongoose = require("mongoose")
const ClockRouter = require("./Route/ClockRoute")
const cors = require("cors")


const PORT = 8080
const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/clocks",ClockRouter)


mongoose.connect(DB_URL).then(()=>{
    console.log("Connected!!!");
    
  app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})  
})