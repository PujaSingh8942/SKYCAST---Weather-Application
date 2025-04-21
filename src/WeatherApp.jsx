import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"; // Import your CSS styles here

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 37.12,
    tempMin: 39.95,
    tempMax: 39.95,
    humidity: 11,
    weather: "clear sky",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-wrapper">
      <h2 className="app-title">SKYCAST 🌤</h2>
      <div className="weather-container">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
