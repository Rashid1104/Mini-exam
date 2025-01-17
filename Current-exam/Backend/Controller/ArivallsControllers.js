const ArivallsModel = require("../Models/ArivallsModel")

const getAllArivalls = async (req,res) =>{
    try {
const Arivalls = await ArivallsModel.find({})
        res.status(200).json({
            Arivalls,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arivalls not found!!!"
        })
    }
}
const getArivallById = async (req,res) =>{
    try {
        const {id} = req.params;
const Arivall = await ArivallsModel.findById(id)
        res.status(200).json({
            Arivall,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arivall not found!!!"
        })
    }
}
const DeleteArivall = async (req,res) =>{
    try {
        const {id} = req.params;
const DelArivall = await ArivallsModel.findByIdAndDelete(id)
        res.status(200).json({
            DelArivall,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arivall not found!!!"
        })
    }
}
const AddArivall = async (req,res) =>{
    try {
const NewArivall =  ArivallsModel({...req.body})
await NewArivall.save()
        res.status(200).json({
            NewArivall,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arivall not found!!!"
        })
    }
}

module.exports = {
    getAllArivalls,
    getArivallById,
    DeleteArivall,
    AddArivall,
}