const h1Tag = document.querySelector("#text")
const button = document.querySelector("button")

const generateApi = async () => {

  try {
    const setHeader = {
      headers:{
        Accept:"application/json"
      }
    }
  
  
    const result = await fetch("https://icanhazdadjoke.com",setHeader)
    const data = await result.json()
    h1Tag.innerHTML = data.joke
    
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener("click",generateApi)
generateApi()