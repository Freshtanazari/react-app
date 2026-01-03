import React, {useState} from "react";
import "./Search.css";

export default function Search({onSearch}){

    let [city, setCity ] = useState(null);
    

    // get the value of the city
    function getCity(event){
        setCity(event.target.value);
    }
    // call the funct
    function handleSubmit(event){
        event.preventDefault();
        if(city.trim() !==""){
            onSearch(city);
        }
    }
    
    return(
        <form className ="d-flex justify-content-around" onSubmit={handleSubmit}>
                <input type="search" onChange={getCity} placeholder="Enter a city..." className = "col-8 p-1 rounded " />
                <input type="submit" value="Search" className = "btn btn-primary col-3 fs-6"/>
        </form>
    )
}