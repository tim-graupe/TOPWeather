import { getWeatherZip } from "./getWeatherZip.js";
import { getWeatherName } from "./getWeatherName.js";
import {  forecast } from "./getForecast.js";
import {city, cityName, hourly} from './index.js'


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

export { getWeather };
