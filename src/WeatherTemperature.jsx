import react from 'react'
import { useState } from 'react';
import "./weatherTemperature.css";

function WeatherTemperature(props){
    let [unit, setUnit] = useState("celsius");
    function showFarenheit(event){
        event.preventDefault();
        setUnit("farenheit");
    }
    function convertToFarenheit(celsius){
        return (celsius * 9/5) + 32;
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if(unit === "celsius"){
        
        return(
            <div>
            <span className="temp">{props.celsius}</span><span className="degrees">&deg;C  | <a href="/" onClick={showFarenheit}>&deg;F</a></span>
            </div>
        )
    }
    else {
        return(
            <div>
            <span className="temp">{Math.round(convertToFarenheit(props.celsius))}</span><span className="degrees"><a href="/" onClick={showCelsius}>&deg;C </a> | &deg;F</span>
            </div>
        )
    }
   
}

export default WeatherTemperature;