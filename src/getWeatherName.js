import { showC, showF } from "./DOMfuncs/displaytemps.js";
import { currentConditions } from "./DOMfuncs/displayCurrentConditions.js";
import { city } from "./index.js";

export async function getWeatherName(unit) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=${unit}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
    { mode: "cors" }
  ).catch(function (err) {
    console.log(err);
  });
  const weatherData = await response.json();

  //display current temp
  if (unit == "imperial") {
    showF(weatherData.main.temp, weatherData.name);
    currentConditions(
      weatherData.main.feels_like,
      weatherData.main.humidity,
      weatherData.sys.sunrise,
      weatherData.sys.sunset,
      weatherData.weather[0].description,
      weatherData.wind.speed,
      `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    );
    console.log(weatherData);
  } else {
    showC(weatherData.main.temp, weatherData.name);
    currentConditions(
      weatherData.main.feels_like,
      weatherData.main.humidity,
      weatherData.sys.sunrise,
      weatherData.sys.sunset,
      weatherData.weather[0].description,
      weatherData.wind.speed,
      `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    );
  }
}
