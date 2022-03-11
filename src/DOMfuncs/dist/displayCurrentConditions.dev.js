"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentConditions = currentConditions;
var conditions = document.getElementById("display-current-conditions");

function currentConditions(feel, humidity, sunrise, sunset, description, speed, icon) {
  conditions.textContent = "";
  var feelDiv = document.createElement("div");
  feelDiv.textContent = "feels like: " + Math.round(feel * 10) / 10;
  conditions.appendChild(feelDiv);
  var humidityDiv = document.createElement("div");
  humidityDiv.textContent = "humidity: ".concat(humidity, "%");
  conditions.appendChild(humidityDiv);
  var srDiv = document.createElement("div");
  var time = new Date(sunrise * 1000).toTimeString().substring(0, 5);
  srDiv.textContent = "Sunrise: ".concat(time);
  conditions.appendChild(srDiv);
  var ssDiv = document.createElement("div");
  var ssTime = new Date(sunset * 1000).toTimeString().substring(0, 5);
  ssDiv.textContent = "Sunset: ".concat(ssTime);
  conditions.appendChild(ssDiv);
  var desc = document.createElement("div");
  desc.textContent = description;
  conditions.appendChild(desc);
  var speedDiv = document.createElement("div");
  speedDiv.textContent = "wind speed: ".concat(speed);
  conditions.appendChild(speedDiv);
  var iconImg = document.createElement("img");
  iconImg.src = icon;
  desc.appendChild(iconImg);
}