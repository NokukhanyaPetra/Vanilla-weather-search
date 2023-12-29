function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "f32bcobff3tf69a32a4c45cab6e111b0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}
function handlesubmitSearch(event) {
  event.preventDefault();
  let cityPlace = document.querySelector("#city-info");
  searchCity(cityPlace.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handlesubmitSearch);
searchCity("Potchefstroom");
