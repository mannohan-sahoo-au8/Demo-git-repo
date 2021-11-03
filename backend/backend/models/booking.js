const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  username:String,
  quantity:Number,
  address:String,
  phone:Number,
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model("Booking",bookingSchema)