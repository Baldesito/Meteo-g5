document
  .getElementById("get-weather-btn")
  .addEventListener("click", function () {
    let city = document.getElementById("city-input").value;
    fetchWeather(city);
  });

function fetchWeather(city) {
  let apiKey = "YOUR_API_KEY";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayWeather(data) {
  let weatherDetails = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <!-- Add more weather details here -->
    `;
  document.getElementById("weather-details").innerHTML = weatherDetails;
}
function fetchForecast(city) {
  let apiKey = "YOUR_API_KEY";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayForecast(data);
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
}

function displayForecast(data) {
  let forecastDetails = `<h3>5-day Forecast for ${data.city.name}</h3>`;
  data.list.forEach((forecast, index) => {
    if (index % 8 === 0) {
      // Every 8th item (24 hours interval)
      forecastDetails += `
                <div>
                    <p>Date: ${new Date(
                      forecast.dt_txt
                    ).toLocaleDateString()}</p>
                    <p>Temperature: ${forecast.main.temp} °C</p>
                    <p>Weather: ${forecast.weather[0].description}</p>
                </div>
            `;
    }
  });
  document.getElementById("weather-details").innerHTML += forecastDetails;
}
