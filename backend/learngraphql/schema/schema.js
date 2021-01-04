const graphql = require("graphql")
const _ = require("lodash")

const {GraphQLObjectType,
            GraphQLString,GraphQLInt,GraphQLSchema} = require("graphql")

const users = [
  {"id":"1","name":"manmohan","age":24},
  {"id":"2","name":"kuna","age":25},
  {"id":"3","name":"sanjay","age":26},
  {"id":"4","name":"prashant","age":28}
]

const UserType = new GraphQLObjectType({
  name:"user",
  fields:{
    id:{type:GraphQLString},
    name:{type:GraphQLString},
    age:{type:GraphQLInt}
  }
})

const RootQuery = new GraphQLObjectType({
  name:"RootTypeQuery",
  fields:{
    user:{
      type:UserType,
      args:{id:{type:GraphQLString}},
      resolve(parentValue,args){
        return _.find(users,{id:args.id})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})