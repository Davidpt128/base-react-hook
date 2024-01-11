import React, { useEffect } from 'react'
import axios from 'axios';

const Weather = () => {
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
            console.log("data", response.data)
        }
        fetchMyAPI()
    }, [])
    return (
        <div>Weather</div>
    )
}

export default Weather