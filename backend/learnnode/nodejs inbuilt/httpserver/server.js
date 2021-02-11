// for creating a server by http

const http = require("http")

const server = http.createServer((req,res) => {
  if(req.url == "/"){
    res.end("Hello from server side")
  } else if (req.url == "/contact") {
    res.end("Hello from contact side")
  } else {
    res.writeHead(404, {"Content-type":"text/html"})
    res.end("<h1>404 not found</h1>")
  }
})

server.listen(3000, () => {
  console.log(`server is running on port ${3000}`)
})