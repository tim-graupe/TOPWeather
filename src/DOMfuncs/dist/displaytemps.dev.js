"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showF = showF;
exports.showC = showC;

var _getWeather = require("../getWeather.js");

function showF(temp, name) {
  var rounded = Math.round(temp * 10) / 10;
  _getWeather.displayTemp.textContent = "".concat(rounded, "F");
  _getWeather.cityName.textContent = name;
}

function showC(temp, name) {
  var rounded = Math.round(temp * 10) / 10;
  _getWeather.displayTemp.textContent = "".concat(rounded, "C");
  _getWeather.cityName.textContent = name;
}