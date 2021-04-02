var a = 20
var b = 5

// console.log(a>b || b<a || b>6)

var name = "Manmohan Sahoo"
var age = 24
var city = "Keonjhar"

// console.log("My name is " + name + " age is " + age + " lives in " + city)

// what will be the output, when we add a number with a string

var x = 5
var b = "manmohan"

// console.log(x+b)

//write a programme to swap two numbers

var a = 6
var b = 7

var c = b
  b = a
  a = c

// console.log(a,b)

//write a programme to swap two numbers without using third variables
var a = 5
var b = 9

a = a+b
b = a-b
a = a-b
// console.log(a,b)

//write a programm that works out wheather if a given year is a leap year or not.


var year = 2000
// debugger
if(year%4 == 0){
  // console.log("leap year")
} else {
  // console.log("not a leap year")
}

// what is truthy and falsy value in javascript

// there are 5 falsy values in javascript - 0,false,null,undefined,NaN

//ternary operator
var age = 25

// console.log((age>=18)?"you are eligible":"you are not eligible")


var area = "circle"

var PI = 3.142 , l = 5 , b = 8

/*if(area == "circle") {
  console.log('the area of circle is ' + PI*l*b)
} else if (area == 'rectangle') {
  console.log('the area of rectangle is ' + l*b/2)
} else if (area == 'triangle') {
  console.log('the area triangle is '+ l*b)
} else {
  console.log("data")
}*/

// with switch method

var area = "circle"

var PI = 3.142 , l = 8, b = 5

// switch(area){
//   case "circle":
//     console.log("the area of circle is" + PI*l*b)
//     break

//   case "triangle":
//     console.log("the area of triangle is" + l*b)
//     break

//   case "rectangle":
//     console.log("the area of rectangle is" + l*b/2)
//     break

//   default:
//     console.log("please enter valid data")

// }

// while loop

// var num = 0

// while(num <= 10) {
//   console.log(num)
//   num++
// }

//do while loop

// var num = 0

// do {
//   debugger
//   console.log(num)
//   num++
// }while(num <= 10)

// for loop
/* for(initializer; condition; iteration) {
    execution
}
  */ 

// for(var num=0; num <= 10; num++) 
// {
//   console.log(num)
// }

// q- write a javascript program to print table for given number (8,9,12,15) in for loop 

// for (var num = 1; num<=10; num++ ) {
//   var table = 12
//   console.log(table*num)
// }

// function sum (a,b) {
//  console.log(a*b)
// }
// sum(5,2)

// function details() {
//   let myName = "Manmohan"
//   console.log(myName)

//   if(true) {
//     let myLastName = "Sahoo"
//     console.log(myLastName)
//     console.log(myName)
//   }
//   console.log(myLastName) // because this is blcok scope
// }

// details()

// const sum = () => {
//   let a=5 , b=4
//   let total = a+b
//   console.log(`the sum of two numbers is ${total}`)
// }
// sum()

// for(var num = 1; num <= 10; num++) {
//   var tableOf = 8
//   console.log(tableOf*num)
// }

var myFriends = ["manmoahan","pamlaj","sasas"]
// console.log(myFriends[1])
// console.log(myFriends[myFriends.length-1])
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i])
// }

// for(let elements in myFriends){
//   console.log(elements)
// }

// for(let elements of myFriends) {
//   console.log(elements)
// }

// myFriends.forEach(function(element,index,array) {
//   console.log(element + " index: "+index)
// })

// myFriends.forEach((element,index,array) => {
//   console.log(element)
// })


// var nameList = ["kuna","muna","sima","manoj"]

// for (elements in nameList) {
//   console.log(elements)
// }
// for(element of nameList) {
//   console.log(element)
// }

// nameList.forEach((element) => {
//   console.log(element)
// })

// console.log(nameList[nameList.length-1]) // last element of ana array

// var numbers = [25,35,22,35,48,80,45,50,60]

// const rangeNumbers = numbers.filter((element) => {
//   return element < 20
// })

// console.log(rangeNumbers)



// var numbers = [25,35,22,35,48,80,45,50,60]

// const rangeNumbers = numbers.filter((element) => {
//   return element < 40
// })

// console.log(rangeNumbers) 

// push() -- add element in last of an array
// unshift()-- add element begning of an array.
// shift() -- remove first element
//pop()-- remove last element.

// sort the array in descending order.

// const fruit = ["banana","orange","apple","mango"]

// console.log(fruit.sort().reverse()) // descending order

// const array = [1,30,4,21,10000,99]

// console.log(array.sort())
// console.log(array.sort().reverse())

const months = ["jan","march","april","june","july"]

// for update a element in an array

// const indexOfMonth = months.indexOf("april")

// if(indexOfMonth != -1) {
//   months.splice(indexOfMonth,1,"APRIL")
//   console.log(months)
// } else {
//   console.log("please enter a valid data")
// }

// for delete a element in an array

// const indexOfMonth = months.indexOf("april")

// if(indexOfMonth != -1) {
//   months.splice(indexOfMonth,1)
//   console.log(months)
// } else {
//   console.log("please enter a valid data")
// }

// find the square root of each element of the given array ?

// let arr = [25,36,49,64,81]

// let sqroot = arr.map((element) => {
//   return Math.sqrt(element)
// })
// console.log(sqroot)


// multiply each element by 2 and return only those element which are grater than 10

// let arr = [2,3,4,6,8]

// let newArr = arr.map((element) => {
//   return element*2
// }).filter((curElem) => {
//   return curElem > 10
// })
// console.log(newArr)

// let arr = [2,3,5,6,8]

// let newArr = arr.reduce((accumulator,element) => {
//   return accumulator += element
// })

// console.log(newArr)

// let arr = [
//   ['abc','abc'],
//   ['def','def'],
//   ['ghl','ghl']
// ]

// let flatArr = arr.reduce((accum,element) => {
//   return accum.concat(element)
// })

// console.log(flatArr)

// let sentence = "my name is 'Manmohan Sahoo' lives in badapadana"
// let sentence = "my name is \"Manmohan Sahoo\" lives in badapadana"
// let sentence = 'my name is "Manmohan Sahoo" lives in badapadana'

// console.log(sentence)

// let myNmae = "my name is manmohan sahoo"

// console.log(myNmae.indexOf("a"))

// let fruits = "manmohan sahoo"

// let result = fruits.slice(4)
// console.log(result)

let newString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium minus odio molestias consequuntur reprehenderit doloremque ratione! Magni sit adipisci, impedit est labore laborum rem dignissimos animi iste dolore consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium minus odio molestias consequuntur reprehenderit doloremque ratione! Magni sit adipisci, impedit est labore laborum rem dignissimos animi iste dolore consectetur!"

// let result = newString.slice(0,280)

// console.log(result)
// console.log(newString.length)

// let word = "Manmmohan Sahoo"

// let lastChar = word.length-1

// let uniqueCode = word.charCodeAt(lastChar)
// console.log(uniqueCode)

// let letter = "Manmohan Sahoo"
// console.log(letter.charCodeAt(0))

// let letter = "manmohan , sahoo"

// console.log(letter.split(","))

// console.log(Date.now()) // give time in miliseconds from 1 jan 1970.
// console.log(new Date().toString())
// console.log(new Date().toLocaleString())

// let date = new Date(2021,11,11,11,10,10)
// // console.log(date.toLocaleString())
// console.log(date.toString())

//date methods

// let date = new Date()

// console.log(date.toLocaleString())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())

// time methods

// let date = new Date(1616337501611)

// console.log(date.getTime())
// console.log(date.getHours())
// console.log(date.toLocaleString)

// let time = new Date()

// console.log(time.toLocaleTimeString())

// console.log(Math.abs(-55.5))
// console.log(Math.round(5.654))

// console.log(Math.ceil(4.51))
// console.log(Math.floor(4.51))

