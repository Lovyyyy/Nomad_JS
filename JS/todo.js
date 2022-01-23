const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("#todo-input")
const toDoList = document.querySelector("#todo-list")

let toDos = []

function saveToDos() {
  localStorage.setItem("ToDoList", JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentNode 
  //  console.dir 와 log를 통해서 발생하는 이벤트를 추적 할 수 있음
  // 이벤트를 추적하여 타겟과 부모노드/엘리먼트등을 확인 가능 
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id))

  saveToDos()
}

function paintToDo (newToDo){
  const li = document.createElement("li")
  li.id = newToDo.id

  const span = document.createElement("span")
  span.textContent = newToDo.text;

  const button = document.createElement("button")
  button.textContent = "X"
  button.addEventListener("click",deleteToDo)
  toDoList.append(li)
  li.append(span)
  li.append(button)
}

function handleToDoSubmit (event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text : newToDo,
    id : Date.now()
  }
  toDos.push(newToDoObj)
  paintToDo(newToDoObj)
  saveToDos()
}


toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem("ToDoList") 

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}
