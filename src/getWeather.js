import { getWeatherZip } from "./getWeatherZip.js";
import { getWeatherName } from "./getWeatherName.js";
import { getForecast, forecast } from "./getForecast.js";

const displayTemp = document.getElementById("display-temp");
const submitBtn = document.getElementById("submit-btn");
const city = document.getElementById("city-input");
const cityName = document.getElementById("display-city-name");
const hourly = document.getElementById("display-hourly");

async function getWeather(unit) {
  const currentCity = city.value;
  if (isNaN(currentCity)) {
    forecast.textContent = "";
    hourly.textContent = "";
    getWeatherName(unit);
  } else if (!isNaN(currentCity)) {
    forecast.textContent = "";
    hourly.textContent = "";
    getWeatherZip(unit);
  }
}

export { displayTemp, submitBtn, city, cityName, getWeather };
