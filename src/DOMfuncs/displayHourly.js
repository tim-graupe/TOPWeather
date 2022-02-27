const hourly = document.getElementById("display-hourly");

function renderHourly(hours, temps, icon) {
  const timeDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  const iconDiv = document.createElement("img");
  timeDiv.textContent = hours;
  tempDiv.textContent = temps;
  iconDiv.src = icon;
  timeDiv.appendChild(tempDiv);
  hourly.appendChild(timeDiv);
  timeDiv.appendChild(iconDiv);
  hourly.className = "hourly-card";
}

export { renderHourly };
