const DishModel = require("../Models/DishModels")

const GetAllDishes = async (req,res) =>{
   try {
    const dishes = await DishModel.find({})
    res.status(200).json({
        dishes,
        message: "Success!!!"
    })
   } catch (error) {
    res.status(500).json({
        message: "Dishes not found!!!!"
    })
   }
}
const GetDishById = async (req,res) =>{
    try {
        const {id} = req.params;
     const dish = await DishModel.findById(id)
     res.status(200).json({
         dish,
         message: "Success!!!"
     })
    } catch (error) {
     res.status(500).json({
         message: "Dish not found!!!!"
     })
    }
 }
 const DeleteDish = async (req,res) =>{
    try {
        const {id} = req.params;
     const Deldish = await DishModel.findByIdAndDelete(id)
     res.status(200).json({
        Deldish,
         message: "Success!!!"
     })
    } catch (error) {
     res.status(500).json({
         message: "Dish not found!!!!"
     })
    }
 }
 const AddDish = async (req,res) =>{
    try {
     const NewDish = DishModel({...req.body})
     await NewDish.save()
     res.status(201).json({
        NewDish,
         message: "Success!!!"
     })
    } catch (error) {
     res.status(500).json({
         message: "Dish not found!!!!"
     })
    }
 }

 module.exports = {
    GetAllDishes,
    GetDishById,
    DeleteDish,
    AddDish,
 }