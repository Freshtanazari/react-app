import React from "react";
import WeatherIcon from "./WeatherIcon.jsx";
import WeatherTemperature from "./WeatherTemperature.jsx";

const WeatherInfo = ({ data }) => {
  if (!data || !data.city) {
    return <p>Please enter a city to get the weather</p>;
  }

  return (
    <div className="container">
      {/* City name */}
      <div className="row">
        <div className="col-12">
          <p className="fs-1 fw-bold m-0">{data.city}</p>
        </div>
      </div>

      {/* Weather main row */}
      <div className="row align-items-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <WeatherIcon code={data.icon} alt={data.description} />
        </div>

        <div className="col-4 d-flex justify-content-center">
          <WeatherTemperature celsius={data.temp} />
        </div>

        <div className="col-4">
          <ul className="list-unstyled m-0">
            <li>
              {data.day} {data.hour}:{data.minutes}
            </li>
            <li className="text-capitalize">{data.description}</li>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
