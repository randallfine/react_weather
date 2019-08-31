import React from "react";
import Skycons from "react-skycons";
import timeConverter from "../utilities/timeConverter";
import "./Currently.css";

const Currently = ({ currentWeather }) => {
  const {
    time,
    summary,
    temperature,
    apparentTemperature
  } = currentWeather.currently;
  const { temperatureHigh, temperatureLow } = currentWeather.daily.data[0];

  return (
    <div className="currently">
      {/* <h1>Your Current Weather</h1> */}

      <div className="weather-display">
        <p>
          As of{" "}
          {
            timeConverter(time)
              .split(",")
              .reverse()[0]
          }
        </p>
        <div className="color-circle">
          <p>
            HI: {temperatureHigh.toFixed(0)}° Low:{temperatureLow.toFixed(0)}°
          </p>
          <h2 className="current-temp">{temperature.toFixed(0)}°</h2>
          <p>Feels like: {apparentTemperature.toFixed(0)}°</p>
        </div>

        <Skycons
          style={{ width: "10em" }}
          color=""
          icon={currentWeather.currently.icon.toUpperCase()}
          autoplay={true}
        />
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Currently;
