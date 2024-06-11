function refreshWeather(response) {
  let cityElement = document.querySelector('#city')
  cityElement.innerHTML = response.data.city
  let temperatureElement = document.querySelector('#temperature')
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
