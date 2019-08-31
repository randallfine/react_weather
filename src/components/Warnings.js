import React from "react";
import timeConverter from "../utilities/timeConverter";

const Warnings = ({ alerts }) => {
  const info = alerts.map(alert => {
    const { title, time, expires, description, uri } = alert;
    return (
      <div key={time}>
        <h4>
          {title} until{" "}
          {
            timeConverter(expires)
              .split(",")
              .reverse()[0]
          }{" "}
          {timeConverter(expires).split(",")[0]}
        </h4>
        {/* <p>{description}</p> */}
      </div>
    );
  });
  return <div>{info}</div>;
};

export default Warnings;
