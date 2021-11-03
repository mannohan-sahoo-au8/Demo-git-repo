const mongoose = require('mongoose');

const carsTypeSchema = new mongoose.Schema({
  _id:Number,
  name:String,
  logo:String
})

module.exports = mongoose.model("cars_type",carsTypeSchema)