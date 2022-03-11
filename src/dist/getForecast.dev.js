"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForecast = getForecast;
exports.forecast = void 0;

var _displayHighLow = require("./DOMfuncs/displayHighLow.js");

var _index = require("./index.js");

var forecast = document.getElementById("display-forecast");
exports.forecast = forecast;
var header = document.getElementById("week-header");

function getForecast(unit) {
  header.textContent = "The Week Ahead";
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(_index.city.value, ",us&units=").concat(unit, "&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
    mode: "cors"
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(response.city.coord.lat, "&lon=").concat(response.city.coord.lon, "&units=").concat(unit, "&exclude=hourly,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
      mode: "cors"
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      var days = [];
      var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      for (var i = 0; i < response.daily.length - 1; i++) {
        days.push(response.daily[i]);
      }

      var highTemps = days.map(function (el) {
        if (unit == "imperial") {
          return Math.round(el.temp.max * 10) / 10 + "F";
        } else {
          return Math.round(el.temp.max * 10) / 10 + "C";
        }
      });
      var lowTemps = days.map(function (el) {
        if (unit == "imperial") {
          return Math.round(el.temp.min * 10) / 10 + "F";
        } else {
          return Math.round(el.temp.min * 10) / 10 + "C";
        }
      });
      var forecastDays = days.map(function (el) {
        var day = new Date(el.dt * 1000);
        var newDay = week[day.getDay()];
        return newDay;
      });
      var forecastIcons = days.map(function (el) {
        return "http://openweathermap.org/img/wn/".concat(el.weather[0].icon, "@2x.png");
      });
      var description = days.map(function (el) {
        return el.weather[0].description;
      });
      var sunrise = days.map(function (el) {
        return new Date(el.sunrise * 1000).toTimeString().substring(0, 5);
      });
      var sunset = days.map(function (el) {
        return new Date(el.sunset * 1000).toTimeString().substring(0, 5);
      });
      var humidityPercentage = days.map(function (el) {
        return el.humidity;
      });
      var rain = days.map(function (el) {
        var percentage = el.pop * 100;
        return percentage;
      }); // response.daily.humidty;
      // reponse.daily.pop;

      for (var _i = 0; _i < highTemps.length; _i++) {
        (0, _displayHighLow.showHighLow)(highTemps[_i], lowTemps[_i], forecastDays[_i], forecastIcons[_i], description[_i], sunrise[_i], sunset[_i], humidityPercentage[_i], rain[_i]);
      }
    });
  });
}