const path = require("path")
const express = require("express")
const app = express()


// const staticPath = path.join(__dirname,"./public")
// console.log(path.join(__dirname,"./public"))

// app.use(express.static(staticPath))

//set view engine
app.set("view engine","ejs")

//rendering the ejs file
app.get("/",(req,res) => {
  res.render("index")
})

// app.get("/",(req,res)=>{
//   res.send("Home Page")
// })

app.get("/about",(req,res)=>{
  res.send("about Page")
})

app.get("/contact",(req,res)=>{
  res.send("contact Page")
})

app.get("/temp",(req,res)=>{
  res.json({
    "id":12,
    "name":"manmohan"
  })
})

app.listen(5000,()=> {
  console.log(`Server is running on port 5000`)
})