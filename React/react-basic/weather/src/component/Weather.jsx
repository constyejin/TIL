import React from 'react'

export const Weather = (props) => {
  return (
    <div className='weather-box'>
      <div>{props.weather && props.weather.name}</div>
      {/* Celsius로 단위 변경 (섭씨) */}
      <h2>{props.weather && props.weather.main.temp}℃</h2>
      <h3>{props.weather && props.weather.weather[0].description}</h3>
    </div>

  )
}

export default Weather;
