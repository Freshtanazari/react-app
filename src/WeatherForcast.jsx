import react from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css"

export default function WeatherForcast() {
  return (
    <div className="weatherForcast mx-3">
        Weather forcast
      <div className="row">
        <div className="col forcastDay">
          <div className="day">Thu</div>
          <WeatherIcon code="01d" size={20} />
          <div className="forcastDetails">
            <span className="forcastMax">19°</span>
            <span className="forcastMin">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
