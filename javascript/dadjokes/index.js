const h1Tag = document.querySelector("#text")
const button = document.querySelector("button")

const generateApi = async () => {

  const setHeader = {
    headers:{
      Accept:"application/json"
    }
  }


  const result = await fetch("https://icanhazdadjoke.com",setHeader)
  const data = await result.json()
  h1Tag.innerHTML = data.joke
}

button.addEventListener("click",generateApi)
generateApi()