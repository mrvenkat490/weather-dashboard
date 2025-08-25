import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/weather?city=${city}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Failed to fetch weather");
    }
    setLoading(false);
  };

  // Format current date & time
  const getDateTime = () => {
    return new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p>⏳ Fetching weather data...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>📅 {getDateTime()}</p>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🤔 Feels Like: {weather.main.feels_like}°C</p>
          <p>
            ⬇ Min: {weather.main.temp_min}°C | ⬆ Max: {weather.main.temp_max}°C
          </p>
          <p>☁ Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
