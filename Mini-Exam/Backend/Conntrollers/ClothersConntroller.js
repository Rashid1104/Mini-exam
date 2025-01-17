const ClothersModel = require("../Models/ClothersModel")

const getALLClothers = async (req, res) => {
    try {
        const clothers = await ClothersModel.find({})
        res.status(200).json({
            clothers,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({

            message: "clothers not found"
        })
    }

}
const getClotherById = async (req, res) => {
    try {
        const { id } = req.params;
        const clother = await ClothersModel.findById(id)
        res.status(200).json({
            clother,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "clother not found"
        })
    }

}
const DeleteClother = async (req, res) => {
    try {
        const { id } = req.params;
        const Delclother = await ClothersModel.findByIdAndDelete(id)
        res.status(200).json({
            Delclother,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({

            message: "clother not found"
        })
    }

}
const AddClother = async (req, res) => {
    try {
        const Newclother = ClothersModel({ ...req.body })
        await Newclother.save()
        res.status(200).json({
            Newclother,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({

            message: "clothers not Added!!!"
        })
    }

}

module.exports = {
    getALLClothers,
    getClotherById,
    DeleteClother,
    AddClother,
}