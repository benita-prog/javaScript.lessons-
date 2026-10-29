"use strict";

const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city");
const apiKeyInput = document.querySelector("#api-key");
const weatherMessage = document.querySelector("#weather-message");
const weatherOutput = document.querySelector("#weather-output");
function setWeatherMessage(text = "", type = "") {
  weatherMessage.textContent = text;
  weatherMessage.className = `status-message ${type}`;
}

/** Renders the JSON fields that are most helpful to a visitor. */
function renderWeather(data) {
  const { location, current } = data;
  weatherOutput.innerHTML = `<h3>${location.name}, ${location.country}</h3><p>${current.condition.text}</p><dl class="weather-details"><div><dt>Temperature</dt><dd>${current.temp_c} °C</dd></div><div><dt>Feels like</dt><dd>${current.feelslike_c} °C</dd></div><div><dt>Humidity</dt><dd>${current.humidity}%</dd></div><div><dt>Wind</dt><dd>${current.wind_kph} kph</dd></div></dl>`;
}
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  const apiKey = apiKeyInput.value.trim();
  if (!city || !apiKey) {
    setWeatherMessage("Enter both a city name and a WeatherAPI key.", "error");
    return;
  }
  setWeatherMessage("Loading weather data...");
  weatherOutput.innerHTML = '<p class="muted-text">Please wait.</p>';
  try {
    // URLSearchParams safely encodes city names such as "New York".
    const parameters = new URLSearchParams({ key: apiKey, q: city });
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?${parameters}`,
    );
    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.error?.message ||
          "The weather service could not complete the request.",
      );
    renderWeather(data);
    setWeatherMessage(`Weather for ${data.location.name} loaded.`, "success");
  } catch (error) {
    weatherOutput.innerHTML =
      '<p class="muted-text">No weather data to show.</p>';
    setWeatherMessage(error.message, "error");
  }
});
