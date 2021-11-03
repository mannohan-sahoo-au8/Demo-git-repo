const express = require("express")
const router = express.Router()
const carModelController = require("../controllers/carModel")

router.get("/",carModelController.getAll)
router.post("/",carModelController.create)
router.get("/:carTypeId",carModelController.getById)
router.put("/:carTypeId",carModelController.updateById)
router.delete("/:carTypeId",carModelController.deleteById)



module.exports = router
