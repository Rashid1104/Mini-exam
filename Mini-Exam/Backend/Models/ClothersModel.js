const mongoose = require("mongoose")

const {Schema} = mongoose

const ClothersSchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
})

const ClothersModel = mongoose.model("clothers",ClothersSchema)

module.exports = ClothersModel