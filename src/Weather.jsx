import React, {useState} from "react";
import Search from "./Search.jsx";

export default function Weather(){
    let [ready, setReady] = useState(false);
    weatherDataDefault ={
          icon: "loading",
            temp: "Loading...",
            description: "Loading...",
            wind: "Loading...",
            humidity: "Loading...",
            day: "Loading...",
            hour: "Loading...",
            minutes: "Loading...",
    };
    let [weatherData, setWeatherData] = useState(weatherDataDefault);
    function handleWeatherData(data){
        setWeatherData(data);
        setReady(true);
    }
    return(
        <div className = "Weather mt-5">
            
            <div className="row">

                <div className = "col-6">

                    <p className ="m-0 fs-1 fw-bold">New York</p>
                    <div className = "m-0 row">
                    <img className = "col-6" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
                    <p className=" fs-1 fw-bold">56&deg; C</p>
                    </div>

                </div>

                <div className="col-6">
                    <ul className="mt-5">
                        <li>{weatherData.day} : {weatherData.hour}: {weatherData.minutes}</li>
                        <li>{weatherData.description}</li>
                        <li>humidity: {weatherData.humidity}%</li>
                        <li> wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
                 {/* send the function as a prop to child component */}
                <Search onWeatherData = {handleWeatherData} />
            </div>
        </div>
    )
}
