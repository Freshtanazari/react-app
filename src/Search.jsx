import React, {useState} from "react";


export default function Search({onSearch}){
    let [city, setCity ] = useState(null);
    function getCity(event){
        setCity(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        if(city.trim() !==""){
            onSearch(city);
        }
    }
    

    return(
        <div  >
        <form className ="row" onSubmit={handleSubmit}>
                <input type="search" onChange={getCity} placeholder="Enter a city..." className = "col-9" />
                <input type="submit" value="Search" className = "btn btn-primary col-3"/>
        </form>
        </div>
    )
}