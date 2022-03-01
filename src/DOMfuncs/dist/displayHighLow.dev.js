"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showHighLow = showHighLow;

var _getForecast = require("../getForecast.js");

function showHighLow(high, low, dayName, icon) {
  var highDiv = document.createElement("div");
  var dayDiv = document.createElement("div");
  var lowDiv = document.createElement("div");
  var iconDiv = document.createElement("img");
  highDiv.textContent = high;
  lowDiv.textContent = low;
  dayDiv.textContent = dayName;
  iconDiv.src = icon;
  dayDiv.className = "forecast-card";
  dayDiv.appendChild(highDiv);
  dayDiv.appendChild(lowDiv);
  dayDiv.appendChild(iconDiv);

  _getForecast.forecast.appendChild(dayDiv);
}