"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hourly = exports.cityName = exports.displayTemp = exports.fBtn = exports.cBtn = exports.city = exports.submitBtn = void 0;

var _getWeather = require("./getWeather.js");

var _getForecast = require("./getForecast.js");

var _getForecastHourly = require("./getForecastHourly.js");

var submitBtn = document.getElementById("submit-btn");
exports.submitBtn = submitBtn;
var city = document.getElementById("city-input");
exports.city = city;
var cBtn = document.getElementById("change-to-C");
exports.cBtn = cBtn;
var fBtn = document.getElementById("change-to-F");
exports.fBtn = fBtn;
var displayTemp = document.getElementById("display-temp");
exports.displayTemp = displayTemp;
var cityName = document.getElementById("display-city-name");
exports.cityName = cityName;
var hourly = document.getElementById("display-hourly");
exports.hourly = hourly;
cBtn.addEventListener("click", function () {
  (0, _getWeather.getWeather)("metric");
  (0, _getForecast.getForecast)("metric");
  (0, _getForecastHourly.getForecastHourly)("metric");
});
fBtn.addEventListener("click", function () {
  (0, _getWeather.getWeather)("imperial");
  (0, _getForecast.getForecast)("imperial");
  (0, _getForecastHourly.getForecastHourly)("imperial");
  console.log('hi');
});
submitBtn.addEventListener("click", function () {
  (0, _getWeather.getWeather)("imperial");
  (0, _getForecast.getForecast)("imperial");
  (0, _getForecastHourly.getForecastHourly)("imperial");
});
city.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    (0, _getWeather.getWeather)("imperial");
    (0, _getForecast.getForecast)("imperial");
    (0, _getForecastHourly.getForecastHourly)("imperial");
  }
}); //TODO: add weather icons for current weather, mobile friendly