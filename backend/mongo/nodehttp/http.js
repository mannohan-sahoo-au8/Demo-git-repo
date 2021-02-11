const http = require("http")
const port = process.env.PORT || 6000

const server = http.createServer((req,res) => {
 res.setHeader("content-type","text/html")
  res.write('<h1>hello</h1>')
  res.end()
})

server.listen(port,() => {
  console.log(`server is runing on port ${port}`)
})