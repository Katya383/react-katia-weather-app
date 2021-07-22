import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              Name="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:52</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className=" col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">86</span>
              <span className="unit">°F</span>
            </div>
          </div>
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
