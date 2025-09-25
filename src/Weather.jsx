import React, {useState, useEffect} from "react";
import Search from "./Search.jsx";
import axios from "axios";

export default function Weather(){
    useEffect(() => {
        console.log("useeffect is triggered");
    fetchData("Paris");
    }, []);
    const [weatherData, setWeatherData] = useState({
        icon: "loading",
        temp: "--",
        description: "Loading...",
        wind: "--",
        humidity: "--",
        day: "--",
        hour: "--",
        minutes: "--"
    });
  
    function fetchData(city){
        let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        console.log("calling api");
        axios.get(url).then(handleResponse).catch(err => console.error("API call failed:", err));;
    }
    function handleResponse(response){
        const daysOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

        let utcSeconds = response.data.dt;
        let timezoneOffset = response.data.timezone;
        let citySeconds = (utcSeconds + timezoneOffset) *1000;
        let cityDate = new Date(citySeconds);

        // set the data in an object
        const weatherData = {
            icon:response.data.weather[0].icon,
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            day: daysOfWeek[cityDate.getUTCDay()],
            hour: cityDate.getUTCHours(),
            minutes: cityDate.getUTCMinutes()
        };
        setWeatherData(weatherData);
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
                <Search onSearch={fetchData} />
            </div>
        </div>
    )
}
