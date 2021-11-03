const booking = require("../models/booking")

module.exports = {
  getAll:(req,res,next) => {
    let bookingList = []
    booking.find({},(err,bookings) => {
      if(err) {
        next(err)
      } else {
        for(let booker of bookings ){
          bookingList.push({
            username:booker.username,
            quantity:booker.quantity,
            address:booker.address,
            phone:booker.phone
          })
        }
        res.json({status:"Success",message:"all bookings",data:{allBookings:bookingList}})
      }
    })
  },

  create:(req,res,next) => {
    console.log(req)
    booking.create({
      username:req.body.username,
      quantity:req.body.quantity,
      address:req.body.address,
      phone:req.body.phone
    },(err,result) => {
      if(err) next (err)
      res.json({status:"success",message:"service booked succesfully",data:null})
    })
  }
}