const conditions = document.getElementById("display-current-conditions");
export function currentConditions(
  feel,
  humidity,
  sunrise,
  sunset,
  description,
  icon,
  speed
) {
  conditions.textContent = "";
  const feelDiv = document.createElement("div");
  feelDiv.textContent = "Feels like: " + Math.round(feel * 10) / 10;
  conditions.appendChild(feelDiv);

  const humidityDiv = document.createElement("div");
  humidityDiv.textContent = `Humidity: ${humidity}%`;
  conditions.appendChild(humidityDiv);

  const srDiv = document.createElement("div");
  const time = new Date(sunrise * 1000);
  srDiv.textContent = time.getHours() + ":" + time.getMinutes();
  conditions.appendChild(srDiv);

  const ssDiv = document.createElement("div");
  const ssTime = new Date(sunset * 1000);
  ssDiv.textContent = ssTime.getHours() + ":" + ssTime.getMinutes();
  conditions.appendChild(ssDiv);

  const desc = document.createElement("div");
  desc.textContent = description;
  conditions.appendChild(desc);

  const iconImg = document.createElement("img");
  iconImg.src = icon;
  conditions.appendChild(iconImg);

  const speedDiv = document.createElement("div");
  speedDiv.textContent = speed;
  conditions.appendChild(speedDiv);
}
