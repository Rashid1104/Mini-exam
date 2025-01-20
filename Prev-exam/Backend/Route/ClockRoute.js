const express = require('express')
const { getAllClocks, AddClock, DeleteClock, getClockById } = require('../Controller/ClockController')

const router = express.Router()

router.get("/",getAllClocks)
router.get("/:id",getClockById)
router.delete("/:id",DeleteClock)
router.post("/",AddClock)

module.exports = router
