const express = require("express")
const app = express()
const port = process.env.PORT || 9900
const restaurantRouter = require("./src/routes/restaurantRouter")
const hotelRouter = require("./src/routes/hotelRouter")

var menu = [
  {Link:"/",name:"Home"},
  {Link:"/restaurant",name:"Restaurant"},
]
//static file
app.use(express.static(__dirname+"/public"))

//html
app.set("views","./src/views")

//view engine
app.set("view engine","ejs")


//default route
app.get("/",(req,res)=>{
  // res.status(200).send("Home route")
  res.render("index",{title:"Home page",menuitem:menu})
})



app.use("/restaurant",restaurantRouter)
app.use("/hotels",hotelRouter)

// server lister
app.listen(port,(err)=>{
  if(err) throw err;
  console.log(`Server is running on port ${port}`)
})
