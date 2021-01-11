const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongodb = require("mongodb")
const session = require("express-session")
const colors = require("colors")
const url = "mongodb://localhost:27017"
const port = process.env.PORT || 4000

//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

// use session
app.use(session ({
  secret:"thisisthesecretkey"
}))

//connect to DB
let db;
var mongoClient = new mongodb.MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true})
mongoClient.connect((err) => {
  if(err) throw err
  db = mongoClient.db("blog")
})

//health check url
app.get("/health",(req,res)=>{
  res.send("Health is OK")
})

//get all post
app.get("/post",(req,res) => {
  if(!req.session.user) {
    return res.send("no session found")
  }
  db.collection("posts").find().toArray((err,postData) => {
    if(err) throw err
   return res.send(postData)
  })
})

//add posts
app.post("/addpost", (req,res) => {
  if(!req.session.user) {
    return res.send("No user found")
  }

  let data = {
    title:req.body.title,
    description:req.body.description,
    createdBy:req.session.user._id,
    name:req.session.user.name
  }

  db.collection("posts").insert(data, (err,result) => {
    res.send("Data imported")
  })
})

//register user
app.post("/register", (req,res) => {
  let user = {
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  }
  db.collection("users").insert(user, (err,data) => {
    res.send("data imported")
  })
})

//login user
app.post("/login", (req,res) => {
  let user = {
    email:req.body.email,
    password:req.body.password
  }
  db.collection("users").findOne(user, (err,data) => {
    if(err || !data) {
      res.send("No user found")
    } else {
      req.session.user = data
      res.send("Login successfully")

    }
  })
})

//logout user
app.get("/logout",(req,res) => {
  req.session.user = null
  res.send("Logout successfully")
})

//server is listening
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`.green.inverse)
})