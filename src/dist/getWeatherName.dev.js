"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherName = getWeatherName;

var _displaytemps = require("./DOMfuncs/displaytemps.js");

var _getWeather = require("./getWeather.js");

function getWeatherName(unit) {
  var response, weatherData;
  return regeneratorRuntime.async(function getWeatherName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(_getWeather.city.value, "&units=").concat(unit, "&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
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

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}