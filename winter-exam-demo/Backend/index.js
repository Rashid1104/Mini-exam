const express = require('express')
const app = express()
const mnogoose = require("mongoose")
const ArrivesRouter = require("./Route/ArrivesRoute")
const cors = require("cors")
const PORT = 8080
const DB_URL = "mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json())
app.use(cors())
app.use("/arrives", ArrivesRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


mnogoose.connect(DB_URL).then(() => {
  console.log("connected!!!");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
})