// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { fetchWeatherData, fetchForecastData, fetchCityImage } from "../Api";

const WeatherDetails = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [cityImage, setCityImage] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleFetchWeather = async () => {
    if (city.trim() === "") return; // Non fare nulla se la città è vuota
    const weatherData = await fetchWeatherData(city);
    const forecastData = await fetchForecastData(city);
    const imageData = await fetchCityImage(city);
    setWeather(weatherData);
    setForecast(forecastData);
    setCityImage(imageData);
    setShowDetails(false); // Reset dettagli quando viene fatta una nuova ricerca
    setCity("");
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-details-container">
      <h1 className="text-warning">
        Mio Mete<i className="bi bi-brightness-high-fill"> </i> {""}
        App
      </h1>
      <div className="input-group justify-content-center my-4">
        <input
          className="form-control mb-1 m-2 rounded-4 border-0"
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Cerca una citta..."
        />
        <button
          className="btn btn-warning rounded-pill mb-1 m-2"
          onClick={handleFetchWeather}
        >
          <span className="text-secondary">Cerca</span>{" "}
          <i className="bi text-white bi-search"></i>
        </button>
      </div>
      {cityImage && (
        <div className="card city-image-card my-4">
          <img src={cityImage} alt={city} className="card-img-top" />
        </div>
      )}
      {weather && weather.main && weather.weather && (
        <div className="card weather-card text-white" onClick={toggleDetails}>
          <div className="card-body">
            <h2 className="card-title">{weather.name}</h2>
            <p className="card-text">
              {" "}
              <i className="bi bi-cloud-sun-fill text-warning p-1"></i>{" "}
              {weather.main.temp} °C{" "}
              <i className="bi text-info bi bi-thermometer-half"></i>
            </p>
            <p className="card-text">Tempo: {weather.weather[0].description}</p>
          </div>
        </div>
      )}
      {showDetails && forecast && (
        <div className="forecast-details">
          <h2 className="text-warning justify-content-center">
            Previsioni per 5 Giorni
          </h2>
          <div className="row">
            {forecast.list.map(
              (item, index) =>
                index % 8 === 0 && (
                  <div key={index} className="col-md-2">
                    <div className="card forecast-card">
                      <div className="card-body">
                        <p>
                          <i className="bi text-info bi-calendar3"></i>{" "}
                          {new Date(item.dt_txt).toLocaleDateString()}
                        </p>
                        <p>
                          <i className="bi bi-cloud-sun-fill text-warning p-1"></i>{" "}
                          {""}
                          {item.main.temp} °C{" "}
                          <i className="bi text-info bi bi-thermometer-half"></i>
                        </p>
                        <p>Tempo: {item.weather[0].description}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
