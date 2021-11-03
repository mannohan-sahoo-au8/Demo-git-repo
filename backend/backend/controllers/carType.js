const carsType = require("../models/carType")

module.exports={
  getById:(req,res,next) => {
    console.log(req.params)
    carsType.findById(req.params.carTypeId,(err,result) => {
      if (err) {
        next(err)
      } else {
        res.json({status:"success",message:"data find",data:{carTypes:result}})
      }
    })
  },

  getAll:(req,res,next) => {
    let carTypeList = []
    carsType.find({},(err,carTypes) => {
      if(err) {
        next(err)
      } else {
        for(let type of carTypes ){
          carTypeList.push({id:type._id,name:type.name,logo:type.logo})
        }
        res.json({status:"Success",message:"car type list found",data:{carTypes:carTypeList}})
      }
    })
  },

  create:(req,res,next) => {
    carsType.insertMany({_id:req.body._id,name:req.body.name,logo:req.body.logo},(err,result) => {
      if(err) next (err)
      res.json({status:"success",message:"data added succesfully",data:null})
    })
  },

  updateById:(req,res,next) => {
    carsType.findByIdAndUpdate(req.params.carTypeId,
      {_id:req.body._id,name:req.body.name,logo:req.body.logo},(err,result) => {
        console.log(req.body)
        if(err) next (err)
        res.json({status:"success",message:"data updated successfully",data:null})
      }
      )
  },

  deleteById:(req,res,next)=>{
    carsType.findByIdAndRemove(req.params.carTypeId,(err,result)=>{
      if(err) next(err)
      res.json({status:"success",message:"data deleted successfully"})
    })
  }
}