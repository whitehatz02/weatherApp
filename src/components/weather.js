import React from 'react';

const Weather = props =>(
      <div className="ifo">
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Condition: {props.description}</p>}
      {props.error && <p> {props.error}</p>}
      </div>
    );

export default Weather;
