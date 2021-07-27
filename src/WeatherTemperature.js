import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.farenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.farenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
          {""}| °C
        </span>
      </div>
    );
  }
}
