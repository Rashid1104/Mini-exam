const { default: mongoose } = require("mongoose")
const mnogoose = require("mongoose")

const { Schema } = mongoose

const ArrivesSchema = new Schema({
    img: { type: String },
    name: { type: String },
    brand: { type: String },
    price: { type: Number },
})

const ArrivesModel = mnogoose.model("arrives",ArrivesSchema)

module.exports = ArrivesModel