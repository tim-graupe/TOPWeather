"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHourly = renderHourly;
var hourly = document.getElementById("display-hourly");

function renderHourly(hours, temps, icon) {
  var timeDiv = document.createElement("div");
  var tempDiv = document.createElement("div");
  var iconDiv = document.createElement("img");
  timeDiv.textContent = hours;
  tempDiv.textContent = temps;
  iconDiv.src = icon;
  timeDiv.appendChild(tempDiv);
  hourly.appendChild(timeDiv);
  timeDiv.appendChild(iconDiv);
  hourly.className = "hourly-card";
}