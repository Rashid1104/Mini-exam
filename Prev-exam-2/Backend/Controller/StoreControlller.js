const StoreModel = require("../Model/StoreModel")

const getAllStore = async (req,res) =>{
    try {
       const stores = await StoreModel.find({})
       res.status(200).json({
        stores,
        message: "Successfull!!!"
       }) 
    } catch (error) {
        res.status(500).json({
            message: "Stores not found!!!"
           }) 
    }
}
const GetStoreById = async (req,res) =>{
    try {
        const {id} = req.params
       const store = await StoreModel.findBy(id)
       res.status(200).json({
        store,
        message: "Successfull!!!"
       }) 
    } catch (error) {
        res.status(500).json({
            message: "Store not found!!!"
           }) 
    }
}
const DeleteStore = async (req,res) =>{
    try {
        const {id} = req.params
       const Delstore = await StoreModel.findByIdAndDelete(id)
       res.status(200).json({
        Delstore,
        message: "Successfull!!!"
       }) 
    } catch (error) {
        res.status(500).json({
            message: "Store not found!!!"
           }) 
    }
}
const AddStore = async (req,res) =>{
    try {
       const Newstore = StoreModel({...req.body})
       await Newstore.save()
       res.status(201).json({
        Newstore,
        message: "Successfull!!!"
       }) 
    } catch (error) {
        res.status(500).json({
            message: "Store not found!!!"
           }) 
    }
}

module.exports = {
    getAllStore,
    GetStoreById,
    DeleteStore,
    AddStore,
}