const forecast = document.getElementById("display-forecast");

export function showHighLow(high, low, dayName, icon) {
  const highDiv = document.createElement("div");
  const dayDiv = document.createElement("div");
  const lowDiv = document.createElement("div");
  const iconDiv = document.createElement("img");
  highDiv.textContent = high;
  lowDiv.textContent = low;
  dayDiv.textContent = dayName;
  iconDiv.src = icon;
  dayDiv.className = "forecast-card";
  dayDiv.appendChild(highDiv);
  dayDiv.appendChild(lowDiv);
  dayDiv.appendChild(iconDiv);
  forecast.appendChild(dayDiv);
}
