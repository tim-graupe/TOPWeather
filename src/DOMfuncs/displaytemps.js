import { displayTemp, submitBtn, city, cityName } from "../getWeather.js";

function showF(temp, name) {
  const rounded = Math.round(temp * 10) / 10;
  displayTemp.textContent = `${rounded}F`;
  cityName.textContent = name;
}

function showC(temp, name) {
  const rounded = Math.round(temp * 10) / 10;
  displayTemp.textContent = `${rounded}C`;
  cityName.textContent = name;
}

export { showF, showC };
