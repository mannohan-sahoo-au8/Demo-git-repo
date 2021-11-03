const express = require("express")
const app = express()
const cors = require("cors")
const logger = require("morgan") // HTTP request logger middleware for node.js
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 4000


//jwt secret token
app.set('secretKey', 'nodeRestApi')

//
const users = require("./routes/user")
const carType = require("./routes/carType")
const carModel = require("./routes/carModel")
const booking = require("./routes/booking")
require("./config/db")


//middlewares
app.use(cors())
app.use(logger("dev"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//
app.get("/",(req,res) => {
  res.send("Health check OK")
})

app.use("/users",users)
app.use("/cartype",validateUser,carType)
app.use("/carmodel",validateUser,carModel)
app.use("/booking",validateUser,booking)


function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}

// handle 404 error
app.use((req, res, next) => {
  let err = new Error('Not Found');
     err.status = 404;
     next(err);
 });

 app.use((err, req, res, next) => {
  console.log(err);
   if(err.status === 404)
    res.status(404).json({message: "Not found"});
   else 
     res.status(500).json({message: "Something looks wrong :( !!!"});
 });

app.listen(port,() => {
  console.log(`Server is running on port ${port}`)
})