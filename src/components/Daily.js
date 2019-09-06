import React from "react";
import Skycons from "skycons";
import timeConverter from "../utilities/timeConverter";

const Daily = ({ data }) => {
  let info = data.map(d => {
    return (
      <div className="daily" key={d.time}>
        <Skycons
          style={{ width: "100%" }}
          icon={d.icon.toUpperCase()}
          autoplay={false}
        />
        {timeConverter(d.time).split(",")[0]}
      </div>
    );
  });
  return <div>{info}</div>;
};

export default Daily;
