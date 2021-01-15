const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongodb = require("mongodb")
const session = require("express-session")
const colors = require("colors")
const url = "mongodb://localhost:27017"
const port = process.env.PORT || 4000

//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

// use session
app.use(session ({
  secret:"thisisthesecretkey"
}))

//static path
app.use(express.static(__dirname+'/public'))

//html
app.set("views","./src/views")

//view engine
app.set("view engine","ejs")

//connect to DB
let db;
var mongoClient = new mongodb.MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true})
mongoClient.connect((err) => {
  if(err) throw err
  db = mongoClient.db("blog")
})

//look for login page
app.get("/",(req,res) => {
  let message = req.query.message?req.query.message:""
  res.render('login',{message:message})
})

//health check url
app.get("/health",(req,res)=>{
  res.send("Health is OK")
})


//get all post
app.get("/posts",(req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! please Try Again")
  }
  db.collection("posts").find({isActive:true}).toArray((err,postData) => {
    if(err) throw err
    res.render("blog",{postData:postData,userData:req.session.user})
  })
})

//addPost UI
app.get("/addPost",(req,res) => {
  res.render("addPost",{userData:req.session.user})
})

//add posts
app.post("/addpost", (req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! Please Try Again")
  }

  let data = {
    title:req.body.title,
    description:req.body.description,
    createdBy:req.session.user._id,
    name:req.session.user.name,
    isActive:true
  }

  db.collection("posts").insert(data, (err,result) => {
    if(err) throw err
    res.redirect("posts")
  })
})

//dispplay ui
app.get("/register",(req,res) => {
  res.render("register")
})

//register user
app.post("/register", (req,res) => {
  let user = {
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    role:req.body.role?req.body.role:"user",
    isActive:true
  }
  db.collection("users").insert(user, (err,data) => {
    res.redirect("/")
  })
})

//login user
app.post("/login", (req,res) => {
  let user = {
    email:req.body.email,
    password:req.body.password
  }
  db.collection("users").findOne(user, (err,data) => {
    if(err || !data) {
      res.redirect("/?message=invalid login! Please Try Again")
    } else {
      req.session.user = data
      res.redirect("/posts")

    }
  })
})

//edit post
app.get("/edit/:id",(req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! Please Try Again")
  }
  let id = req.params.id
  db.collection("posts").findOne(
    {_id:mongodb.ObjectID(id)}, (err,data) => {
      if(err) throw err
      res.render("edit",{data,userData:req.session.user})
    }
  )
})

//update post
app.post("/editpost/:id",(req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! Please Try Again")
  }
  let Id = req.params.id

  db.collection("posts").update(
    {id:mongodb.ObjectID(Id)},
    {
      $set:{
        title:req.body.title,
        description:req.body.description
      }
    } , (err,result) => {
      if(err) throw err
      res.redirect("/posts")
    }
  )
})

//update user
app.put("/editUser/:id",(req,res) => {
  let Id = req.params.id

  db.collection("users").update(
    {id:mongodb.ObjectID(Id)},
    {
      $set:{
        name:req.body.name,
        email:req.body.email
      }
    } , (err,result) => {
      if(err) throw err
      res.send("Data Updated")
    }
  )
})

//hard delete of post  // soft delete of post
app.get("/deletePost/:id",(req,res) => {
  let id = req.params.id

  db.collection("users").deleteOne({_id:mongodb.ObjectID(id)}, (err,result) => {
    if(err) throw err
    res.redirect("/posts")
  })
})

//edit user
app.put("/editUser",(req,res) => {
  let Id = req.body._id

  db.collection("users").update(
    {id:mongodb.ObjectID(Id)},
    {
      $set:{
        name:req.body.name,
        email:req.body.email,
        role:req.body.update_type,
        isActive:req.body.update_active
      }
    } , (err,result) => {
      if(err) throw err
      res.send("Data Updated")
    }
  )
})

//soft delete of users // hard delete of users
app.put("/deactivate/:id",(req,res) => {
  let Id = req.params.id

  db.collection("users").update(
    {id:mongodb.ObjectID(Id)},
    {
      $set:{
       isActive:false
      }
    } , (err,result) => {
      if(err) throw err
      res.send("Data Updated")
    }
  )
})


//logout user
app.get("/logout",(req,res) => {
  req.session.user = null
  res.redirect("/?message=Logout Success! Please Login Again")
})

//all users
app.get("/allusers",(req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! Please Try Again")
  }

  if (req.session.user.role !== "Admin") {
    res.redirect("/posts?message=You are not authorised")
  }

  db.collection("users").find().toArray((err,data) => {
    res.render("users",{data:data})
  })
})

//user by id
app.get("/usersbyid",(req,res) => {
  if(!req.session.user) {
    res.redirect("/?message=No session found! Please Try Again")
  }

  if (req.session.user.role !== "Admin") {
    res.redirect("/posts?message=You are not authorised")
  }

  let query = {}
  if(req.query.id) {
    query = {_id:mongodb.ObjectID(req.query.id)}
  }

  db.collection("users").find(query).toArray((err,data) => {
    res.send(data)
  })
})


//server is listening
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`.green.inverse)
})