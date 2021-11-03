const express = require("express")
const router = express.Router()
const bookingController = require("../controllers/booking")

router.get("/",bookingController.getAll)
router.post("/",bookingController.create)


module.exports = router