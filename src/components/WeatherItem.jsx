import React from 'react'
import _ from 'lodash';


const WeatherItem = (props) => {
    let { displayWeather } = props
    return (
        <div className="card-body p-4">
            <p>{!_.isEmpty(displayWeather) ? `${new Date().getUTCHours() + Math.floor(displayWeather.timezone / 3600)}:${new Date().getUTCMinutes()}` : <span>Time</span>}</p>
            <h4 className="mb-3 sfw-normal">{!_.isEmpty(displayWeather) ? `${displayWeather?.name}, ${displayWeather?.sys?.country}` : <span>Location</span>}</h4>
            <p className="mb-2 fs-5">Current temperature: <strong>{!_.isEmpty(displayWeather) ? `${displayWeather?.main?.temp}°C` : <span>&nbsp;</span>}</strong></p>
            <p>Feels like: <strong>{!_.isEmpty(displayWeather) ? `${displayWeather?.main?.feels_like}°C` : <span>&nbsp;</span>}</strong></p>
            <p>Max: <strong>{!_.isEmpty(displayWeather) ? `${displayWeather?.main?.temp_max}°C` : <span>&nbsp;</span>}</strong>, Min: <strong>{!_.isEmpty(displayWeather) ? `${displayWeather?.main?.temp_min}°C` : <span>&nbsp;</span>}</strong></p>
            <div className="d-flex flex-row align-items-center">
                <img className='' width="50px" height="50px" src={`https://openweathermap.org/img/wn/${!_.isEmpty(displayWeather) ? displayWeather?.weather[0]?.icon : "10d"}@2x.png`} alt="" />
                <p className="mb-0 me-4">{!_.isEmpty(displayWeather) ? `${displayWeather?.weather[0]?.description}` : <span>&nbsp;</span>}</p>
            </div>
        </div>
    )
}

export default WeatherItem