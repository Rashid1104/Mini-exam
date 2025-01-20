const ClockModel = require("../Model/ClockModel")

const getAllClocks = async (req,res) =>{
    try {
        const clocks = await ClockModel.find({})
        res.status(200).json({
            clocks,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Clocks not found!!!"
        })
    }
}
const getClockById = async (req,res) =>{
    try {
        const {id} = req.params;
        const clock = await ClockModel.findById(id)
        res.status(200).json({
            clock,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Clock not found!!!"
        })
    }
}
const DeleteClock = async (req,res) =>{
    try {
        const {id} = req.params;
        const Delclock = await ClockModel.findByIdAndDelete(id)
        res.status(200).json({
            Delclock,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Clocks not found!!!"
        })
    }
}
const AddClock = async (req,res) =>{
    try {
        const Newclock = ClockModel({...req.body})
        await Newclock.save()
        res.status(201).json({
            Newclock,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Clocks not found!!!"
        })
    }
}

module.exports = {
    getAllClocks,
    getClockById,
    DeleteClock,
    AddClock,
}