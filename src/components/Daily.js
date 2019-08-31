import React from "react";
import timeConverter from "../utilities/timeConverter";

const Daily = ({ data }) => {
  let info = data.map(d => {
    return <div key={d.time}>{timeConverter(d.time).split(",")[0]}</div>;
  });
  return <div>{info}</div>;
};

export default Daily;
