const express = require('express')
const { getAllArivalls, AddArivall, DeleteArivall, getArivallById } = require('../Controller/ArivallsControllers')

const router = express.Router()

router.get("/",getAllArivalls)
router.get("/:id",getArivallById)
router.delete("/:id",DeleteArivall)
router.post("/",AddArivall)

module.exports = router