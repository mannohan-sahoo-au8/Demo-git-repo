const express = require("express")
const {graphqlHTTP } = require("express-graphql")
const app = express()
const port = 5600

const schema = require("./schema/schema")

app.use("/graphql",graphqlHTTP ({
  schema:schema,
  graphiql:true
}))
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`)
})