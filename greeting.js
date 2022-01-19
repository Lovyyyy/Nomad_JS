const baseForm = document.querySelector("#baseform");
// const gameForm = document.querySelector("#gameform");
const baseNumber = baseForm.querySelector("#basenumber");
const myNumber = baseForm.querySelector("#mynumber");
const submit = baseForm.querySelector("#submit");
const state = document.querySelector(".gamestate");
const result = document.querySelector(".gameresult");
;

const HIDDEN_CLASS = "hidden";

function numberSubmit(event) {
  event.preventDefault();
  const randomNumber =  randomNumberMaker(0,baseNumber.value)

  function randomNumberMaker(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1))
  }
  
  state.classList.remove(HIDDEN_CLASS);
  state.textContent = `You chose : ${myNumber.value}, the machine choose ${randomNumber}`;


  console.log(`${myNumber.value} // ${randomNumber}` )

  result.classList.remove(HIDDEN_CLASS);

  if (myNumber.value === randomNumber) {
    result.textContent = "you win"
   } else {
    result.textContent = "You LOOSER!";
  }
}

console.log(baseNumber.value);

baseForm.addEventListener("submit", numberSubmit);

