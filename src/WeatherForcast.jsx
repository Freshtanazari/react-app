import React, {useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import ForcastDay from "./ForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  let [forcastLoaded, setForcastLoaded] = useState(false);
  let [forcastData, setForcastData] = useState(null);
  
  function load(){
    if (!props.coordinates) return null;
    let apiKey = "fboa45182d680fb13e9a481dbtf60b57";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }
  
  useEffect(()=>{
    setForcastLoaded(false);
  }, [props.coordinates])

  function handleResponse(response) {
    setForcastLoaded(true);
    setForcastData(response.data.daily);
  }

  if (forcastLoaded) {
    return (
      <div className="weatherForcast my-5">
        <div className="row">
          {forcastData.map((dailyforcast, index)=> {
            if(index < 5){
              return(
              <div className="col forcastDay" key={index}>
                <ForcastDay data={dailyforcast}/>
              </div>
            )
            }else{
              return null;
            } 
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
