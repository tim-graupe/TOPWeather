"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherZip = getWeatherZip;

var _displayCurrentConditions = require("./DOMfuncs/displayCurrentConditions.js");

var _displaytemps = require("./DOMfuncs/displaytemps.js");

var _index = require("./index.js");

function getWeatherZip(unit) {
  var response, weatherData;
  return regeneratorRuntime.async(function getWeatherZip$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?zip=".concat(_index.city.value, ",us&units=").concat(unit, "&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
            mode: "cors"
          })["catch"](function (err) {
            console.log(err);
          }));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          weatherData = _context.sent;

          //display current temp
          if (unit == "imperial") {
            (0, _displaytemps.showF)(weatherData.main.temp, weatherData.name);
          } else {
            (0, _displaytemps.showC)(weatherData.main.temp, weatherData.name);
          }

          (0, _displayCurrentConditions.currentConditions)(weatherData.main.feels_like, weatherData.main.humidity, weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.weather[0].description, weatherData.wind.speed, "http://openweathermap.org/img/wn/".concat(weatherData.weather[0].icon, "@2x.png"));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}