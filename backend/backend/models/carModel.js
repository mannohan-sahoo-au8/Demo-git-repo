const mongoose = require('mongoose');

const carsModelSchema = new mongoose.Schema({
  _id:String,
  carType:Number,
  name:String,
  servicePrice:String,
  image:String
})

module.exports = mongoose.model("cars_model",carsModelSchema)