const button = document.querySelector(".button-note")

const updateLsData = () => {
  const textData = document.querySelectorAll("textarea")
  const notes = []
  
  textData.forEach((note) => {
    return notes.push(note.value)
  })

  localStorage.setItem("notes",JSON.stringify(notes))
}

const addNewNote = (text = "") => {

  const note = document.createElement("div")
  note.classList.add("note")
  const htmlData = `
  <div class="button-group">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash"></i></button>
  </div>
  <div class="main-div ${text ? "":"hidden"}"></div>
  <textarea class="${text ? "hidden":""}"></textarea>
  `
  note.insertAdjacentHTML("afterbegin",htmlData)
  document.body.appendChild(note)


  //getting the reference

  const editButton = note.querySelector(".edit")
  const deleteButton = note.querySelector(".delete")
  const mainDiv = note.querySelector(".main-div")
  const textArea = note.querySelector("textarea")

  deleteButton.addEventListener("click", () => {
    note.remove()
    updateLsData()
  })

  textArea.value = text
  mainDiv.innerHTML = text

  editButton.addEventListener("click",() => {
    mainDiv.classList.toggle("hidden")
    textArea.classList.toggle("hidden")
  })

  textArea.addEventListener("change",(event) => {
    const value = event.target.value
    mainDiv.innerHTML = value
    updateLsData()
  })

}

const notes = JSON.parse(localStorage.getItem("notes"))

if(notes) {notes.forEach((note) => addNewNote(note)) }


button.addEventListener("click", () => addNewNote() )