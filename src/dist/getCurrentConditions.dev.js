"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentConditions = currentConditions;
var conditions = document.getElementById("display-current-conditions");

function currentConditions(feel, humidity, sunrise, sunset, description, icon, speed) {
  conditions.textContent = "";
  var feelDiv = document.createElement("div");
  feelDiv.textContent = "Feels like: " + Math.round(feel * 10) / 10;
  conditions.appendChild(feelDiv);
  var humidityDiv = document.createElement("div");
  humidityDiv.textContent = "Humidity: ".concat(humidity, "%");
  conditions.appendChild(humidityDiv);
  var srDiv = document.createElement("div");
  var time = new Date(sunrise * 1000);
  srDiv.textContent = time.getHours() + ":" + time.getMinutes();
  conditions.appendChild(srDiv);
  var ssDiv = document.createElement("div");
  var ssTime = new Date(sunset * 1000);
  ssDiv.textContent = ssTime.getHours() + ":" + ssTime.getMinutes();
  conditions.appendChild(ssDiv);
  var desc = document.createElement("div");
  desc.textContent = description;
  conditions.appendChild(desc);
  var iconImg = document.createElement("img");
  iconImg.src = icon;
  conditions.appendChild(iconImg);
  var speedDiv = document.createElement("div");
  speedDiv.textContent = speed;
  conditions.appendChild(speedDiv);
}