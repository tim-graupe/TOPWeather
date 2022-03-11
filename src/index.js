import { getWeather } from "./getWeather.js";
import { getForecast } from "./getForecast.js";
import { getForecastHourly } from "./getForecastHourly.js";


const submitBtn = document.getElementById("submit-btn");
const city = document.getElementById("city-input");
const cBtn = document.getElementById("change-to-C");
const fBtn = document.getElementById("change-to-F");
const displayTemp = document.getElementById("display-temp");
const cityName = document.getElementById("display-city-name");
const hourly = document.getElementById("display-hourly");


cBtn.addEventListener("click", () => {
  getWeather("metric");
  getForecast("metric");
  getForecastHourly("metric");
});

fBtn.addEventListener("click", () => {
  getWeather("imperial");
  getForecast("imperial");
  getForecastHourly("imperial");
  console.log('hi')
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
export {submitBtn,city,cBtn,fBtn,displayTemp,cityName,hourly}