"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showHighLow = showHighLow;
var displayForecast = document.getElementById("display-forecast");

function showHighLow(high, low, dayName, icon, description, sunrise, sunset, humidity, rain) {
  //makes card
  var forecastCardInner = document.createElement("div");
  var forecastCard = document.createElement("div");
  forecastCard.className = "forecast-card";
  forecastCardInner.className = "forecast-card-inner"; //display front

  var highDiv = document.createElement("div");
  var forecastCardFront = document.createElement("div");
  var lowDiv = document.createElement("div");
  var iconDiv = document.createElement("img");
  highDiv.textContent = high;
  lowDiv.textContent = low;
  forecastCardFront.textContent = dayName;
  iconDiv.src = icon;
  forecastCardFront.appendChild(highDiv);
  forecastCardFront.appendChild(lowDiv);
  forecastCardFront.appendChild(iconDiv);
  forecastCardFront.className = "forecast-card-front"; //display back

  var forecastCardBack = document.createElement("div");
  forecastCardBack.className = "forecast-card-back";
  var desc = document.createElement("div");
  desc.textContent = description;
  forecastCardBack.appendChild(desc);
  var sr = document.createElement("div");
  sr.textContent = sunrise;
  forecastCardBack.appendChild(sr);
  var ss = document.createElement("div");
  ss.textContent = sunset;
  forecastCardBack.appendChild(ss);
  var humid = document.createElement("div");
  humid.textContent = "Humidity: ".concat(humidity, "%");
  forecastCardBack.appendChild(humid);
  var pop = document.createElement("div");
  pop.textContent = "Chance of precipitation: ".concat(rain, "%");
  forecastCardBack.appendChild(pop); // forecastCardBack.appendChild(rainDiv);

  forecastCardInner.appendChild(forecastCardFront);
  forecastCardInner.appendChild(forecastCardBack);
  forecastCard.appendChild(forecastCardInner);
  displayForecast.appendChild(forecastCard);
} // response.daily.humidty;
// reponse.daily.pop;