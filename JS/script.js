const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS ="hidden"
const USER_NAME = "userName"

function onLoginSubmit(event) {
  event.preventDefault();  // 이벤트의 기본 행동이 중지되도록 하는 함수 
  const userName = loginInput.value
  loginForm.classList.add(HIDDEN_CLASS); 
  localStorage.setItem("name", userName)

  paintGreeting(userName)
}

function paintGreeting(userName) {
  greeting.classList.remove(HIDDEN_CLASS)
  greeting.textContent = `Welcome ${userName}`
}


const savedUserName = localStorage.name
if (savedUserName === undefined){
  loginForm.classList.remove(HIDDEN_CLASS)
  loginForm.addEventListener("submit", onLoginSubmit) 
} else {
  paintGreeting(savedUserName)
}
