// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchWeatherData, fetchForecastData, fetchCityImage } from "../Api";

const WeatherDetails = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [cityImage, setCityImage] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleFetchWeather = async () => {
    const weatherData = await fetchWeatherData(city);
    const forecastData = await fetchForecastData(city);
    const imageData = await fetchCityImage(city);
    setWeather(weatherData);
    setForecast(forecastData);
    setCityImage(imageData);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    if (city) {
      handleFetchWeather();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className="weather-details-container">
      <div className="input-group justify-content-center">
        <input
          className="bg-dark text-white form-control mb-1 m-2 rounded-4 border-0"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
        <div className="card city-image-card ">
          <img src={cityImage} alt={city} className="card-img-top" />
        </div>
      )}
      {weather && weather.main && weather.weather && (
        <div className="card weather-card text-white" onClick={toggleDetails}>
          <div className="card-body">
            <h2 className="card-title">{weather.name}</h2>
            <p className="card-text">Temperature: {weather.main.temp} °C</p>
            <p className="card-text">
              Weather: {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
      {showDetails && forecast && (
        <div className="forecast-details">
          <h3 className="text-white">5-day Forecast</h3>
          <div className="row">
            {forecast.list.map(
              (item, index) =>
                index % 8 === 0 && (
                  <div key={index} className="col-md-2">
                    <div className="card forecast-card">
                      <div className="card-body">
                        <p>
                          Date: {new Date(item.dt_txt).toLocaleDateString()}
                        </p>
                        <p>Temperature: {item.main.temp} °C</p>
                        <p>Weather: {item.weather[0].description}</p>
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
