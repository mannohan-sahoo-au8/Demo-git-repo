const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test",()=>{
  console.log("connect to DB")
})

const userSchema = new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  city:{
    type:String
  }
})

const DataUser = mongoose.model("DataUser",userSchema)

//creating user
const createUser = async () => {
  try {
    const newUser = new DataUser ({
      name:"Pankaj Saho",
      email:"som@gmail.com",
      city:"CTC"
    })

    const result = await newUser.save()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

// createUser()

//getting user
const getUser = async () => {
  try {
    const result = await DataUser.find({name:"Pankaj Saho"})
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

getUser()

//deleteuser
const deleteUser = async (_id) =>{
  try {
    const result = await DataUser.deleteOne({_id})
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

deleteUser("600c3ca0fdda1f39cc322d42")





















// const mongoose = require("mongoose")

// // databse connection
// mongoose.connect("mongodb://localhost:27017/test",{  useNewUrlParser: true ,useUnifiedTopology: true },()=>{
//   console.log("Connect tom DB")
// })

// const userSchema = new mongoose.Schema({
//   name:{
//     type:String
//   },
//   city:{
//     type:String
//   },
//   phoneNumber:{
//     type:Number
//   }
// })

// const user = mongoose.model("Users",userSchema)

// const createUser = async () => {
//   try {
//     const someUser = new user ({
//       name:"Manmohan Sahoo",
//       city:"BHubaneswar",
//       phoneNumber:"9090295730"
//     })

//     const result = await someUser.save()
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

// createUser()