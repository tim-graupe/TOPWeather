"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = getWeather;
exports.cityName = exports.city = exports.submitBtn = exports.displayTemp = void 0;

var _getWeatherZip = require("./getWeatherZip.js");

var _getWeatherName = require("./getWeatherName.js");

var _getForecast = require("./getForecast.js");

var displayTemp = document.getElementById("display-temp");
exports.displayTemp = displayTemp;
var submitBtn = document.getElementById("submit-btn");
exports.submitBtn = submitBtn;
var city = document.getElementById("city-input");
exports.city = city;
var cityName = document.getElementById("display-city-name");
exports.cityName = cityName;
var hourly = document.getElementById("display-hourly");

function getWeather(unit) {
  var currentCity;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          currentCity = city.value;

          if (isNaN(currentCity)) {
            _getForecast.forecast.textContent = "";
            hourly.textContent = "";
            (0, _getWeatherName.getWeatherName)(unit);
          } else if (!isNaN(currentCity)) {
            _getForecast.forecast.textContent = "";
            hourly.textContent = "";
            (0, _getWeatherZip.getWeatherZip)(unit);
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}