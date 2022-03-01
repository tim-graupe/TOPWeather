"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForecastHourly = getForecastHourly;

var _displayHourly = require("./DOMfuncs/displayHourly.js");

var _index = require("./index.js");

var hourly = document.getElementById("display-hourly");

function getForecastHourly(unit) {
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(_index.city.value, ",us&units=").concat(unit, "&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
    mode: "cors"
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(response.city.coord.lat, "&lon=").concat(response.city.coord.lon, "&units=").concat(unit, "&exclude=daily,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
      mode: "cors"
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      var hours = [];

      for (var i = 0; i < response.hourly.length - 36; i++) {
        hours.push(response.hourly[i]);
      }

      var hourlyTemps = hours.map(function (el) {
        if (unit == "imperial") {
          return Math.round(el.temp * 10) / 10 + "F";
        } else {
          return Math.round(el.temp * 10) / 10 + "C";
        }
      });
      var forecastHours = hours.map(function (el) {
        var time = new Date(el.dt * 1000);
        var hour = time.getHours();
        var minute = time.getMinutes();
        var newTime = "".concat(hour, ":").concat(minute).concat(minute);
        return newTime;
      });
      var forecastIcons = hours.map(function (el) {
        return "http://openweathermap.org/img/wn/".concat(el.weather[0].icon, "@2x.png");
      });

      for (var _i = 0; _i < hourlyTemps.length; _i++) {
        (0, _displayHourly.renderHourly)(forecastHours[_i], hourlyTemps[_i], forecastIcons[_i]);
      }
    });
  });
}