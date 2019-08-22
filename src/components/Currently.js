import React from "react";
import Skycons from "react-skycons";

const Currently = ({ currentWeather }) => {
  const {
    /*time,*/ summary, temperature, apparentTemperature} = currentWeather.currently;
  const { temperatureHigh, temperatureLow } = currentWeather.daily.data[0];
  //const date = new Date(time * 1000)
  //const options = {hour: 'numeric', minute: 'numeric' }
  //weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  return (
    <div className="currently" style={{display:"flex", flexDirection: "column" , alignItems: "center"}}>
      <h1>Your Current Weather</h1>
      {/* <p>As of: {date.toLocaleString("en-US",options)}</p> */}
      <p>
        HI: {temperatureHigh.toFixed(0)} Low:{temperatureLow.toFixed(0)}
      </p>
      <h2>{temperature.toFixed(0)}</h2>
      <p>Feels like: {apparentTemperature.toFixed(0)}</p>
      <p>{summary}</p>
      <Skycons
        style={{ width: "10em"}}
        color=""
        icon={currentWeather.currently.icon.toUpperCase()}
        autoplay={true}
      />
    </div>
  );
};

export default Currently;
