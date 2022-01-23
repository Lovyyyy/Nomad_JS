const clock = document.querySelector("#clock")

const userName = localStorage.name

function  getClock () {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2,"0")
  const minute = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")
  const tictoc = `${hour}:${minute}:${seconds}`
   clock.textContent = `현재 시간 ${tictoc}`
   
}
getClock()
setInterval (getClock, 1000) // 기능을 주기적으로 실행시켜주는 메소드
// setTimeout (getClock, 1000) // 기능을 요청한 시간 이후 실행시키는 메소드 

// console.log("1".padStart(5,"0"))
// console.log("15".padEnd(5,"0"))
//   문자열을 원하는 길이만큼 채워주는 메소드 

