const add = (a,b) => {
  return a+b
}

const sbs = (a,b) => {
  return a-b
}

const multi = (a,b) => {
  return a*b
}

const calculator = (num1,num2,operator) => {
  return operator(num1,num2)
}
console.log(calculator(5,3,add))