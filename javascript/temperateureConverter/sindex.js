const generatureTemperatre = () => {
  const number = document.querySelector("#number").value
  const temperatureSelect = document.querySelector("#temperature")
  const temperatureValue = temperature.options[temperatureSelect.selectedIndex].value

  const celToFah = (cels) => {
    let fahrenheit = Math.round((cels*9/5)+32)
    return fahrenheit
  }

  const fahToCel = (fahr) => {
    let celsius = Math.round((fahr-32) * 5/9)
    return celsius
  }
  
  const kelToCel = (kel) => {
    let kelvin = (kel+273.15)/1
    return kelvin
  }

  let result;

  if(temperatureValue == "celsius") {
    result = celToFah(number)
    document.querySelector("#heading").innerHTML = `=${result} Fahrenheit`

  } else if(temperatureValue == "fahrenheit") {
    result = fahToCel(number)
    document.querySelector("#heading").innerHTML = `=${result} celsius`
  } else {
    result = kelToCel(number)
    document.querySelector("#heading").innerHTML = `=${result} celsius`
  } 
}