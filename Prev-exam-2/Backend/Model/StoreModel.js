const mongoose = require("mongoose")

const {Schema} = mongoose

const StoreSchema = new Schema({
    img: {type: String},
    name: {type: String},
    price: {type: Number},
})

const StoreModel = mongoose.model("store",StoreSchema)

module.exports = StoreModel