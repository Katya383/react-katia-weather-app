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
            rel="noreferrer"
          >
            {"  "}open-sourced on Github
          </a>{" "}
          and hosted on Netlify
          <a
            href="https://youthful-morse-052462.netlify.app"
            target="_blank"
            rel="noreferrer"
          ></a>
        </footer>
      </div>
    </div>
  );
}
