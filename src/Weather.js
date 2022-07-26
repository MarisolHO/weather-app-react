import React, { useState } from "react";
import City from "./City";
import Search from "./Search";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);

  return (
    <div className="wrapper container d-flex flex-column">
      <div className="weather-wrapper border">
        <Search setCurrentWeather={setCurrentWeather} />
        {currentWeather && (
          <>
            <div className="weather-today d-flex justify-content-between">
              <City
                description={currentWeather.description}
                city={currentWeather.city}
                date={currentWeather.date}
              />
              <Temperature
                temperature={currentWeather.temperature}
                humidity={currentWeather.humidity}
                wind={currentWeather.wind}
                icon={currentWeather.icon}
              />
            </div>
            <WeatherForecast coordinates={currentWeather.coordinates} />
          </>
        )}
      </div>
      <p className="open-source">
        This project was coded by Marisol HO and is {""}
        <a
          href="https://github.com/MarisolHO/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source on GitHub
        </a>{" "}
        and{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
