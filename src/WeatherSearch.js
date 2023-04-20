import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidty: response.data.main.humidty,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="submit">Search</button>
      <button type="submit">Current City</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Tempearture: {weather.temperature}°C</li>
          <li>Humidity: {weather.humidity}</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "eaee92b32a6eff815816cb2d360e030e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
}
