const ArrivesModel = require("../Model/ArrivesModel")

const getAllArrives = async(req,res)=>{
    try {
        const arrives = await ArrivesModel.find({})
        res.status(200).json({
            arrives,
            message: "SUCCESSFULL!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arrives not found!!!"
        })
    }
}
const DeleteArrive = async(req,res)=>{
    try {
        const {id} = req.params;
        const Delarrive = await ArrivesModel.findByIdAndDelete(id)
        res.status(200).json({
            Delarrive,
            message: "SUCCESSFULL!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arrive not found!!!"
        })
    }
}
const getArrivesById = async(req,res)=>{
    try {
        const {id} = req.params;
        const arrive = await ArrivesModel.findById(id)
        res.status(200).json({
            arrive,
            message: "SUCCESSFULL!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Arrive not found!!!"
        })
    }
}
const AddArrives = async(req,res)=>{
    try {
        const NewArrive =  ArrivesModel({...req.body})
        await NewArrive.save()
        res.status(201).json({
            NewArrive,
            message: "SUCCESSFULL!!!"
        })
    } catch (error) {
        res.status(500).json({

            message: "Arrive not found!!!"
        })
    }
}
module.exports = {
    getAllArrives,
    DeleteArrive,
    getArrivesById,
    AddArrives,
}