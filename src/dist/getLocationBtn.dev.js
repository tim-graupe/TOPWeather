"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPosition = showPosition;
exports.getLocationBtn = getLocationBtn;

var _displayCurrentConditions = require("./DOMfuncs/displayCurrentConditions.js");

var _displaytemps = require("./DOMfuncs/displaytemps.js");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  getLocationBtn(position.coords.latitude, position.coords.longitude);
}

function getLocationBtn(lat, lon) {
  var response, weatherData;
  return regeneratorRuntime.async(function getLocationBtn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(lat, "&lon=").concat(lon, "&units=imperial&exclude=hourly,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9"), {
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