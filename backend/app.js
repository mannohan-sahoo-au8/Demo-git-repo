const express = require("express")
const app = express()
const redis = require("redis")
const port = process.env.PORT || 9000
const mongodb = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"

const client = redis.createClient({
  host:"localhost",
  port:6379
})

app.get("/data",(req,res) => {
  const userid = Number(req.query.uid)
  
  return client.get(`uid:${userid}`,(err,result) => {
    if(result) {
      const output = JSON.parse(result)
      return res.send(output)
    } else {
      mongodb.connect(url, function(err,connection) {
        const dbobject = connection.db("query")
        dbobject.collection("pep").findOne({_id:userid}, (err,data) => {
          const output = data
          client.setex(`uid:${userid}`,3600,JSON.stringify({source:"Redis",output}))
          return res.send({source:"Mongo",output})
        })
      })
    }
  })
})

app.listen(port,(err) => {
  console.log(`Server is running on port ${port}`)
})