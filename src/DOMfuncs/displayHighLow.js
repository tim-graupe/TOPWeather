const displayForecast = document.getElementById("display-forecast");
export function showHighLow(high, low, dayName, icon, description, sunrise, sunset, humidity, rain) {
  //makes card
  const forecastCardInner = document.createElement("div");
  const forecastCard = document.createElement("div");
  forecastCard.className = "forecast-card"
  forecastCardInner.className = "forecast-card-inner";

  //display front
  const highDiv = document.createElement("div");
  const forecastCardFront = document.createElement("div");
  const lowDiv = document.createElement("div");
  const iconDiv = document.createElement("img");
  highDiv.textContent = high;
  lowDiv.textContent = low;
  forecastCardFront.textContent = dayName;
  iconDiv.src = icon;
  forecastCardFront.appendChild(highDiv);
  forecastCardFront.appendChild(lowDiv);
  forecastCardFront.appendChild(iconDiv);
  forecastCardFront.className = "forecast-card-front";


  //display back
  const forecastCardBack = document.createElement("div");
  forecastCardBack.className = "forecast-card-back";

  const desc = document.createElement("div");
  desc.textContent = description;
  forecastCardBack.appendChild(desc)

  const sr = document.createElement("div");
  sr.textContent = sunrise;
  forecastCardBack.appendChild(sr)

  const ss = document.createElement("div");
  ss.textContent = sunset;
  forecastCardBack.appendChild(ss)

  const humid = document.createElement("div");
  humid.textContent = `Humidity: ${humidity}%`;
  forecastCardBack.appendChild(humid);

  const pop = document.createElement("div");
  pop.textContent = `Chance of precipitation: ${rain}%`
  forecastCardBack.appendChild(pop)



  // forecastCardBack.appendChild(rainDiv);
  forecastCardInner.appendChild(forecastCardFront);
  forecastCardInner.appendChild(forecastCardBack);
  forecastCard.appendChild(forecastCardInner);
  displayForecast.appendChild(forecastCard);


}

// response.daily.humidty;
// reponse.daily.pop;