"use strict";

var _getWeather = require("./getWeather.js");

var _getForecast = require("./getForecast.js");

var _getForecastHourly = require("./getForecastHourly.js");

var submitBtn = document.getElementById("submit-btn");
var city = document.getElementById("city-input");
var cBtn = document.getElementById("change-to-C");
var fBtn = document.getElementById("change-to-F");
cBtn.addEventListener("click", function () {
  (0, _getWeather.getWeather)("metric");
  (0, _getForecast.getForecast)("metric");
  (0, _getForecastHourly.getForecastHourly)("metric");
});
fBtn.addEventListener("click", function () {
  (0, _getWeather.getWeather)("imperial");
  (0, _getForecast.getForecast)("imperial");
  (0, _getForecastHourly.getForecastHourly)("imperial");
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