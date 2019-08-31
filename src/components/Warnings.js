import React from 'react';
import timeConverter from '../utilities/timeConverter';

const Warnings = ({alerts}) => {
const info = alerts.map(alert => {
    const {title, time, expires,description, uri} = alert; 
    return(
      <div>
      <h3>{title} until {timeConverter(expires)}</h3>
      <p>{description}</p>
      </div>
    ) 
  })
  return <div>{info}</div>;

}

export default Warnings;