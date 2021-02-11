const fs = require("fs")
const http = require("http")

const server = http.createServer()

server.on("request",(req,res) => {
  // const rstream = fs.createReadStream("demso.txt")
  // rstream.on("data",(chunk) => {
  //   res.write(chunk)
  // })
  // rstream.on("end",()=>{
  //   res.end()
  // })
  // rstream.on("error",(err)=>{
  //   console.error(err)
  //   res.end("file does not exsit")
  // })

  // pipe method
  const rstream = fs.createReadStream("demo.txt")
  rstream.pipe(res)

})




server.listen(4000,()=>{
  console.log(`server is running on port ${4000}`)
})