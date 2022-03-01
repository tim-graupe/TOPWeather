"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = getWeather;

var _getWeatherZip = require("./getWeatherZip.js");

var _getWeatherName = require("./getWeatherName.js");

var _getForecast = require("./getForecast.js");

var _index = require("./index.js");

function getWeather(unit) {
  var currentCity;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          currentCity = _index.city.value;

          if (isNaN(currentCity)) {
            _getForecast.forecast.textContent = "";
            _index.hourly.textContent = "";
            (0, _getWeatherName.getWeatherName)(unit);
          } else if (!isNaN(currentCity)) {
            _getForecast.forecast.textContent = "";
            _index.hourly.textContent = "";
            (0, _getWeatherZip.getWeatherZip)(unit);
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}