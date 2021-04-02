const myDetails = {
  name:"Manmohan Sahoo",
  age:25,
  city:"Keonjhar",
  getData () {
    console.log(`my name is ${myDetails.name} and age ${myDetails.age} lives in ${myDetails.city}`)
  }
}

// console.log(myDetails.city) 
// myDetails.getData()

// array destructuring

let bioData = ["manmohan",26,"keonjhar"]

// let[firstName,age,city] = bioData
// console.log(firstName)

//object destructuring

let newBioData = {
  name:"Manmohan",
  city:"Keonjhar",
  age:26
}

let {name,city,age} = newBioData

console.log(age)

let myName = "manmohan"

const obj = {
  [myName]:"who are you ?"
}

console.log(obj)

let fruits = ["apple","banana","mango"]

let newFruits = [...fruits,"pine apple","orange"]
console.log(newFruits)

let isPresent = newFruits.includes("apple")
console.log(isPresent) // includes method

const persons = {name:"manmohan",age:250}

const secondPerson = {...persons}

console.log(secondPerson)

  