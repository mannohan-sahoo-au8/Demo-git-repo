const express = require("express")
const app = express()
const axios = require("axios")
const redis = require("redis")
const port = process.env.PORT || 9000

const client = redis.createClient({
  host : "localhost",
  port:6379
})

app.get("/",(req,res) => {
  res.status(200).send("Health is okay")
})
app.get("/data",(req,res) => {
  var usrInput = (req.query.country).trim()
  const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${usrInput}`

  return client.get(`wiki:${usrInput}`,(err,result) => {
    if(result) {
      const output = JSON.parse(result)
      res.send(output)
    } else {
      return axios.get(url)
      .then((response) => {
        const output = response.data
        client.setex(`wiki:${usrInput}`,3600,JSON.stringify({source:"redis",output}))
        return res.send({source:"API",output})
      })
    }
  })
})

app.listen(port,(err) => {
  console.log(`Server is running on port ${port}`)
})