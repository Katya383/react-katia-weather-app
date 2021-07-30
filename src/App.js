import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Katia Barnave and
          <a
            href="https://github.com/Katya383/react-katia-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://youthful-morse-052462.netlify.app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
