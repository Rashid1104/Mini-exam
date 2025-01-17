const mongoose = require("mongoose")

const { Schema } = mongoose

const ArivallsSchema = new Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number},
})

const ArivallsModel = mongoose.model("Arivalls",ArivallsSchema)

module.exports = ArivallsModel