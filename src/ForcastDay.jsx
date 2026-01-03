import React from "react";
import WeatherIcon from "./WeatherIcon";

const ForcastDay = ({ data }) => {
  function maxTemperature() {
    let temp = Math.floor(data.temperature.maximum);
    return temp;
  }

  function minTemperature() {
    let temp = Math.floor(data.temperature.minimum);
    return temp;
  }

  function getDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(data.time * 1000);
    let day = date.getDay();

    return days[day];
  }

  function icon() {
    const iconToCode = {
      "clear-sky-day": "01d",
      "clear-sky-night": "01n",
      "few-clouds-day": "02d",
      "few-clouds-night": "02n",
      "scattered-clouds-day": "03d",
      "scattered-clouds-night": "03n",
      "broken-clouds-day": "04d",
      "broken-clouds-night": "04n",
      "shower-rain-day": "09d",
      "shower-rain-night": "09n",
      "rain-day": "10d",
      "rain-night": "10n",
      "thunderstorm-day": "11d",
      "thunderstorm-night": "11n",
      "snow-day": "13d",
      "snow-night": "13n",
      "mist-day": "50d",
      "mist-night": "50n",
    };

    return iconToCode[data.condition.icon];
  }
  return (
    <>
      <div className="day">{getDay()}</div>
      <WeatherIcon code={icon()} size={20} />
      <div className="forcastDetails">
        <span className="forcastMax">{maxTemperature()}°</span>
        <span className="forcastMin">{minTemperature()}° </span>
      </div>
    </>
  );
};

export default ForcastDay;
