console.log("connected");

const calculateBmi = () => {
  const height = document.getElementById("height").value;
  const weight = document.querySelector("#weight").value
  
  let Bmi = Math.round(weight /(( height*height)/10000))

  document.getElementById("text").innerHTML = Bmi
}