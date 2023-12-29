function handlesubmitSearch(event) {
  event.preventDefault();
  let cityPlace = document.querySelector("#city-info");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityPlace.value;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handlesubmitSearch);
