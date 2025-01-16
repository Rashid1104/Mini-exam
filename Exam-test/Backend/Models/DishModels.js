const mongoose = require("mongoose")

const {Schema} = mongoose

const DishSchema = new Schema({
    img: {type: String},
    name: {type: String},
    description: {type: String},
    price: {type: Number},
})

const DishModel = mongoose.model("dishes", DishSchema)

module.exports = DishModel;