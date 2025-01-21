const express = require('express')
const {  getAllArrives, getArrivesById, DeleteArrive, AddArrives } = require('../Controller/ArrivesController')

const router = express.Router()

router.get("/",getAllArrives)
router.get("/:id",getArrivesById)
router.delete("/:id",DeleteArrive)
router.post("/",AddArrives)

module.exports = router