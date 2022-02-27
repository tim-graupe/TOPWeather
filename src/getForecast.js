import { showHighLow } from "./DOMfuncs/displayHighLow.js";
import { city } from "./getWeather.js";
const forecast = document.getElementById("display-forecast");

export function getForecast(unit) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city.value},us&units=${unit}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.city.coord.lat}&lon=${response.city.coord.lon}&units=${unit}&exclude=hourly,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
        { mode: "cors" }
      )
        .then(function (response) {
          return response.json();
        })

        .then(function (response) {
          let days = [];
          let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

          for (let i = 0; i < response.daily.length - 1; i++) {
            days.push(response.daily[i]);
          }
          const highTemps = days.map((el) => {
            if (unit == "imperial") {
              return Math.round(el.temp.max * 10) / 10 + "F";
            } else {
              return Math.round(el.temp.max * 10) / 10 + "C";
            }
          });

          const lowTemps = days.map((el) => {
            if (unit == "imperial") {
              return Math.round(el.temp.min * 10) / 10 + "F";
            } else {
              return Math.round(el.temp.min * 10) / 10 + "C";
            }
          });
          const forecastDays = days.map((el) => {
            let day = new Date(el.dt * 1000);
            let newDay = week[day.getDay()];
            return newDay;
          });

          const forecastIcons = days.map((el) => {
            return `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
          });

          for (let i = 0; i < highTemps.length; i++) {
            showHighLow(
              highTemps[i],
              lowTemps[i],
              forecastDays[i],
              forecastIcons[i]
            );
          }
        });
    });
}
export { forecast };
