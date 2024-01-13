import React from 'react'
import moment from 'moment'

const WeatherItem = (props) => {
    let { displayWeather, handleClickDetail } = props
    let dateInZone = new Date();
    dateInZone.setSeconds(dateInZone.getSeconds() + new Date().getTimezoneOffset() * 60 + displayWeather?.timezone);
    return (
        <div className="card-body p-4">
            <p>{moment(dateInZone).format("HH:mm")}</p>
            <h4 className="mb-3 sfw-normal">{displayWeather?.name ? `${displayWeather?.name}, ${displayWeather?.sys?.country}` : <span>Location</span>}</h4>
            <p className="mb-2 fs-5">Current temperature: <strong>{displayWeather?.main?.temp ? `${displayWeather?.main?.temp}°C` : <span>&nbsp;</span>}</strong></p>
            <p>Feels like: <strong>{displayWeather?.main?.feels_like ? `${displayWeather?.main?.feels_like}°C` : <span>&nbsp;</span>}</strong></p>
            <p>Max: <strong>{displayWeather?.main?.temp_max ? `${displayWeather?.main?.temp_max}°C` : <span>&nbsp;</span>}</strong>, Min: <strong>{displayWeather?.main?.temp_min ? `${displayWeather?.main?.temp_min}°C` : <span>&nbsp;</span>}</strong></p>
            <div className="d-flex flex-row align-items-center">
                <img className='' width="50px" height="50px" src={`https://openweathermap.org/img/wn/${displayWeather?.weather?.length ? displayWeather?.weather[0]?.icon : "10d"}@2x.png`} alt="" />
                <p className="mb-0 me-4">{displayWeather?.weather?.length ? `${displayWeather?.weather[0]?.description}` : <span>&nbsp;</span>}</p>
            </div>
            <button className='btn btn-info' disabled={!displayWeather.name} onClick={handleClickDetail}>Deatail</button>
        </div>
    )
}

export default WeatherItem