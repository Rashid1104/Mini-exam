const express = require('express')
const { GetAllDishes, AddDish, GetDishById, DeleteDish } = require('../Controller/DishControllers')

const router = express.Router()

router.get("/",GetAllDishes)
router.get("/:id",GetDishById)
router.get("/:id",DeleteDish)
router.post("/",AddDish)

module.exports = router;