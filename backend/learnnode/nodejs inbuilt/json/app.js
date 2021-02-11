// javascript object
const data = {
  name:"Manmohan",
  age:24,
  profession:"student"
}

// convert to json
const convertJson = JSON.stringify(data)
console.log(convertJson)

//add to a second file
const fs = require("fs")
fs.writeFile("data.json",convertJson,()=> {
  console.log("file created")
})

//convert to object
const convertObj = JSON.parse(convertJson)
console.log(convertObj)

