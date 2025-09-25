import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Search(props){
    let [city, setCity ] = useState(null);
    function getCity(event){
        setCity(event.target.value);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        fetchData(city);
    }
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

        // send data to parent compoenent
        props.onWeatherData(weatherData);
        console.log(weatherData);
    }
    useEffect(() => {
        console.log("useeffect is triggered");
    fetchData("Paris");
    }, []);
    

    return(
        <div  >
        <form className ="row" onSubmit={handleSubmit}>
                <input type="search" onChange={getCity} placeholder="Enter a city..." className = "col-9" defaultValue="Paris"/>
                <input type="submit" value="Search" className = "btn btn-primary col-3"/>
        </form>
        </div>
    )
}