const express = require('express')
const { getALLClothers, AddClother, DeleteClother, getClotherById } = require('../Conntrollers/ClothersConntroller')

const router = express.Router()

router.get("/", getALLClothers)
router.get("/:id", getClotherById)
router.delete("/:id", DeleteClother)
router.post("/", AddClother)

module.exports = router