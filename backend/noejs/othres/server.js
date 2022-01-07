const express = require("express")
const app = express()
const port = process.env.PORT || 9900
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/newtest"
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(err,res) => {
  res.send("health check OK")
})

const userSchema = new mongoose.Schema ({
  name:String,
  age:String
})

const dataUser = mongoose.model("Users",userSchema)

const createUser = async() => {
  try {
    const newUser = new dataUser({
      name:"kuna",
      age:25
    })
    const result = await newUser.save()
  } catch (err) {
    console.log(err)
  }
}

createUser()

//connect to db
mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true, useFindAndModify: false  },()=>{
  console.log("connected to databse")
})
app.listen(port,()=> {
  console.log(`server is running on port ${port}`)
})