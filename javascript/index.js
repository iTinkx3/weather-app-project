function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-header");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#current-time");
let currentTime = new Date();
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
dateElement.innerHTML = formatDate(currentTime);

let city = "bangor";
let units = "metric";
let apiKey = "66b856279bc0b4680c67df913cfc558a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=${units}`;

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  let description = document.querySelector("#weather-description");
  let searchBar = (temperatureElement.innerHTML = `${temperature}°c`);
  description.innerHTML = response.data.weather[0].description;
  //searchBar.innerHTML = document.querySelector(#current-temp);
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
