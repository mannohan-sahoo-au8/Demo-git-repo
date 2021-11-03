const express = require("express")
const router = express.Router()
const carTypeController = require("../controllers/carType")

router.get("/",carTypeController.getAll)
router.post("/",carTypeController.create)
router.get("/:carTypeId",carTypeController.getById)
router.put("/:carTypeId",carTypeController.updateById)
router.delete("/:carTypeId",carTypeController.deleteById)



module.exports = router
