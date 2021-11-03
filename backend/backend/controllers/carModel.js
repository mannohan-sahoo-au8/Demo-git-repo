const carsModel = require("../models/carModel")

module.exports={
  getById:(req,res,next) => {
    console.log(req.params)
    carsModel.findById(req.params.carTypeId,(err,result) => {
      if (err) {
        next(err)
      } else {
        res.json({status:"success",message:"data find",data:{carsType:result}})
      }
    })
  },

  getAll:(req,res,next) => {
    let carModelList = []
    carsModel.find({},(err,carModels) => {
      if(err) {
        next(err)
      } else {
        for(let model of carModels ){
          carModelList.push({
            id:model._id,
            carType:model.carType,
            servicePrice:model.servicePrice,
            image:model.image
          })
        }
        res.json({status:"Success",message:"car model list found",data:{carTypes:carModelList}})
      }
    })
  },

  create:(req,res,next) => {
    carsModel.create({
      _id:req.body._id,
      carType:req.body.carType,
      name:req.body.name,
      servicePrice:req.body.servicePrice,
      image:req.body.image
    },(err,result) => {
      if(err) next (err)
      res.json({status:"success",message:"car model added succesfully",data:null})
    })
  },

  updateById:(req,res,next) => {
    carsModel.findByIdAndUpdate(req.params.carTypeId,{
      _id:req.body._id,
      carType:req.body.carType,
      name:req.body.name,
      servicePrice:req.body.servicePrice,
      image:req.body.image
    },(err,result) => {
      if(err) next(err)
      res.json({status:"success",message:"data updated successfully"})
    })
  },

  deleteById:(req,res,next) => {
    carsModel.findByIdAndRemove(req.params.carTypeId,(err,result) => {
      if(err) next(err)
      res.json({status:"success",message:"data deleted successfully"})
    })
  }

}