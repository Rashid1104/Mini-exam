const express = require('express')
const { getAllStore, AddStore, DeleteStore, GetStoreById } = require('../Controller/StoreControlller')

const router = express.Router()

router.get("/",getAllStore)
router.get("/:id",GetStoreById)
router.delete("/:id",DeleteStore)
router.post("/",AddStore)

module.exports = router