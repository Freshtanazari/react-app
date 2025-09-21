import React from "react";

export default function Weather(){
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
                        <li>sunday : 12:56</li>
                        <li>broken clouds</li>
                        <li>humidity: 83%</li>
                        <li> wind: 5.km/h</li>
                    </ul>
                </div>
                <form>
                        <div className ="row">
                        <input type="search" placeholder="Enter a city..." className = "col-9"/>
                        <input type="Submit" value="Search" className = "btn btn-primary col-3"/>
                        </div>
                </form>

            </div>

        </div>
    )
}
