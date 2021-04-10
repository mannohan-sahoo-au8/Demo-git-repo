console.log("connected")



const tempLoad = () => {
  let temp =document.querySelector("#fa")
  temp.innerHTML = "&#xf2cb"

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca"
  },1000)

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9"
  },2000)

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8"
  },3000)

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7"
  },4000)
}


tempLoad() 
setInterval(() => {
  tempLoad()
}, 5000);
