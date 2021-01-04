// for creatinng a server with http

// const http = require("http")

// let server = http.createServer((req,res) => {
//   res.write("<h1>I am from the nodejs server</h1>")
//   res.end()
// })

// server.listen(8990)

const http = require("http")
const fs = require("fs")

let server = http.createServer((req,res) => {
  fs.readFile("database.json","utf-8",(err,data) => {
    if(err) throw err
    res.write(data)
  })
})

server.listen(8990)
