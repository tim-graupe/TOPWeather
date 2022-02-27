import { renderHourly } from "./DOMfuncs/displayHourly.js";
import { city } from "./getWeather.js";

const hourly = document.getElementById("display-hourly");

export function getForecastHourly(unit) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city.value},us&units=${unit}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.city.coord.lat}&lon=${response.city.coord.lon}&units=${unit}&exclude=daily,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
        { mode: "cors" }
      )
        .then(function (response) {
          return response.json();
        })

        .then(function (response) {
          let hours = [];
          for (let i = 0; i < response.hourly.length - 36; i++) {
            hours.push(response.hourly[i]);
          }
          const hourlyTemps = hours.map((el) => {
            if (unit == "imperial") {
              return Math.round(el.temp * 10) / 10 + "F";
            } else {
              return Math.round(el.temp * 10) / 10 + "C";
            }
          });

          const forecastHours = hours.map((el) => {
            let time = new Date(el.dt * 1000);
            let hour = time.getHours();
            let minute = time.getMinutes();
            let newTime = `${hour}:${minute}${minute}`;
            return newTime;
          });

          const forecastIcons = hours.map((el) => {
            return `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
          });

          for (let i = 0; i < hourlyTemps.length; i++) {
            renderHourly(forecastHours[i], hourlyTemps[i], forecastIcons[i]);
          }
        });
    });
}
