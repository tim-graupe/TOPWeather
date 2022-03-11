const conditions = document.getElementById("display-current-conditions");
export function currentConditions(
  feel,
  humidity,
  sunrise,
  sunset,
  description,
  speed,
  icon
) {
  conditions.textContent = "";
  const feelDiv = document.createElement("div");
  feelDiv.textContent = "feels like: " + Math.round(feel * 10) / 10;
  conditions.appendChild(feelDiv);

  const humidityDiv = document.createElement("div");
  humidityDiv.textContent = `humidity: ${humidity}%`;
  conditions.appendChild(humidityDiv);

  const srDiv = document.createElement("div");
  const time = new Date(sunrise * 1000).toTimeString().substring(0, 5);
  srDiv.textContent = `Sunrise: ${time}`;
  conditions.appendChild(srDiv);

  const ssDiv = document.createElement("div");
  const ssTime = new Date(sunset * 1000).toTimeString().substring(0, 5);
  ssDiv.textContent = `Sunset: ${ssTime}`;
  conditions.appendChild(ssDiv);

  const desc = document.createElement("div");
  desc.textContent = description;
  conditions.appendChild(desc);

  const speedDiv = document.createElement("div");
  speedDiv.textContent = `wind speed: ${speed}`;
  conditions.appendChild(speedDiv);

  const iconImg = document.createElement("img");
  iconImg.src = icon;
  desc.appendChild(iconImg);
}
