export const fetchWeatherData = async (city) => {
  const apiKey = "a86907a60153972da674094202af88a1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchForecastData = async (city) => {
  const apiKey = "a86907a60153972da674094202af88a1";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchCityImage = async (city) => {
  const apiKey2 = "UkNxd8sijc0PbaIug6lWkimGlL3eHXhA2BzSK1FFDzIXK1bVkkfiIt4S";
  const url = `https://api.pexels.com/v1/search?query=${city}`;

  const response = await fetch(url, {
    headers: {
      Authorization: apiKey2, // Rimosso 'Bearer'
    },
  });

  const data = await response.json();
  if (data.photos && data.photos.length > 0) {
    return data.photos[0].src.small; // Ottiene l'URL della prima immagine trovata
  } else {
    return ""; // Ritorna una stringa vuota se non ci sono foto
  }
};
