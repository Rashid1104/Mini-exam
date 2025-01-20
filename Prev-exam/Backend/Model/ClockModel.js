const mongoose = require("mongoose")

const {Schema} = mongoose

const ClockSchema = new Schema({
    img: {type: String},
    name: {type: String},
    price: {type: Number},
})

const ClockModel = mongoose.model("clock",ClockSchema)

module.exports = ClockModel