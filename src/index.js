function refreshWeather(response) {
  let cityElement = document.querySelector('#city')
  let temperatureElement = document.querySelector('#temperature')
  let cloudElement = document.querySelector('#cloud')
  let humidityElement = document.querySelector('#humidity')
  let windElement = document.querySelector('#wind')
  console.log(response.data)
  windElement.innerHTML = `${response.data.wind.speed}km/h`
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`

  cloudElement.innerHTML = response.data.condition.description
  cityElement.innerHTML = response.data.city
  temperatureElement.innerHTML = Math.round(response.data.temperature.current)
}

function searchCity(city) {
  let apiKey = '7e3b4415c5b18tf300a062dfeo8d69f7'
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
  axios.get(apiUrl).then(refreshWeather)
}
function handleEvent(event) {
  event.preventDefault()
  let searchFormInputElement = document.querySelector('#search-form-input')

  searchCity(searchFormInputElement.value)
}

let searchFormElement = document.querySelector('#search-form')
searchFormElement.addEventListener('submit', handleEvent)

searchCity('Istanbul')
