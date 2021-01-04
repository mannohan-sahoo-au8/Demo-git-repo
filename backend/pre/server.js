const express = require("express")
const app = express()
const port = process.env.PORT || 9000
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")
const postRouter = require("./routes/posts")

mongoose.connect(process.env.DB_URL,() => {
  console.log("connected to DB") 
})

app.use(bodyParser.json())
app.use("/post",postRouter)

app.get("/",(req,res) => {
  res.status(200).send("Health is OK")
})


app.listen(port,(err) => {
  console.log(`Server is running on port ${port}`)
})


