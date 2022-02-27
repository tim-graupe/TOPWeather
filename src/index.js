import { displayTemp, getWeather } from "./getWeather.js";
import { forecast, getForecast } from "./getForecast.js";
import { getForecastHourly } from "./getForecastHourly.js";

const submitBtn = document.getElementById("submit-btn");
const city = document.getElementById("city-input");
const cBtn = document.getElementById("change-to-C");
const fBtn = document.getElementById("change-to-F");

cBtn.addEventListener("click", () => {
  getWeather("metric");
  getForecast("metric");
  getForecastHourly("metric");
});

fBtn.addEventListener("click", () => {
  getWeather("imperial");
  getForecast("imperial");
  getForecastHourly("imperial");
});

submitBtn.addEventListener("click", () => {
  getWeather("imperial");
  getForecast("imperial");
  getForecastHourly("imperial");
});

city.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather("imperial");
    getForecast("imperial");
    getForecastHourly("imperial");
  }
});

//TODO: add weather icons for current weather, mobile friendly
