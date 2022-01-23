const API_KEY = "cce209a7219327f4f8ab2d4bf2d68a0a"

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


function onGeoOk(position){
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url)
  .then(res => res.json())
  .then((data) => {

    city.textContent = data.name
    weather.textContent = data.weather[0].description
    
console.log(url)
  })
}



function onGeoErr() {
  alert("Sorry, We Can't find you ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)



