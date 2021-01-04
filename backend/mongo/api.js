const express = require("express")
const app = express()
const port = process.env.PORT || 9000
const mongo = require("mongodb")
const MongoClient = mongo.MongoClient
const cors = require("cors")
const bodyParser = require("body-parser")
const mongourl = "mongodb://localhost:27017"



let db
let col_name = ("data")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// health check url
app.get("/",(req,res) => {
  res.status(200).send("health check OK")
})

// ger user
app.get("/users",(req,res) => {
  console.log(req.header('x-access-token'))  
  // var query = {}
  // query = {isActive:true}
  db.collection(col_name).find().toArray((err,result) => {
    if(err) throw err
    res.status(200).send(result)
  })

})


//add user
app.post("/adduser",(req,res) => {
  db.collection(col_name).insert(req.body,(err,result) => {
    if(err) throw err
    res.send("data added")
  })
})

// update user


// conection with mongo
MongoClient.connect(mongourl,(err,connection) => {
  if(err) console.log(err)
  db = connection.db("manmohan")
  app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
  })
})