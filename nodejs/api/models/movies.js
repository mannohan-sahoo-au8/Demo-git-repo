const mongoose = require("mongoose")


const Schema = new mongoose.Schema

const MovieSchema = new Schema ({
  name:{
    type:String,
    trim:true,
    required:true
  },
  releasedOn :{
    type:Date,
    trim:true,
    required:true
  }
})


module.exports = moongose.model('Movies', MovieSchema);