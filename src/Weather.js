import React from "react";
import "./Weather.css";


export default function Weather() {
  return(
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input type="search" 
        placeholder="Enter a city.." 
        Name="form-control" 
        />
        </div>
        <div className="col-3">
        <input type="submit" value="search" 
        className ="btn btn-primary" />
        </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:52</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className ="row">
        <div className=" col-6">
          <img src= "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt= "Partly cloudy"
          />
          86°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity : 70%</li>
            <li>Wind: 4mph</li>
          </ul>
        </div>
      </div>
      </div>
  );
}