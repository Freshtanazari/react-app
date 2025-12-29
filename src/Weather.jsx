import React, {useState, useEffect} from "react";
import Search from "./Search.jsx";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.jsx";

export default function Weather(){

    //  set the empty data details onload 
        const [weatherData, setWeatherData] = useState();
        

        // to run on the first render:
        useEffect(()=> {
            fetchData("Paris");
        }, [])

        // fetchdata from API using the City
        function fetchData(city){
            let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            console.log("calling api");
            axios.get(url).then(handleResponse).catch(err => console.error("API call failed:", err));;
        }
        // set all the data 
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
            // get the date of the city
            const cityDate = new Date((response.data.dt + response.data.timezone) * 1000);
    
            // set the data in an object
            let data = {
                city:response.data.name,
                icon:response.data.weather[0].icon,
                temp: Math.round(response.data.main.temp),
                description: response.data.weather[0].description,
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
                day: daysOfWeek[cityDate.getUTCDay()],
                hour: cityDate.getUTCHours(),
                minutes: cityDate.getUTCMinutes()
            };
            setWeatherData(data);
        }
    
    return(
        <div className = "Weather mt-5">
                {/* send the function as a prop to child component */}
                <Search onSearch={fetchData} />
                <WeatherInfo data={weatherData}/>
        </div>
    )
}
