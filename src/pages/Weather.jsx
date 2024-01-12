import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Search from '../components/Search';
import Background from '../img/BanffGlow.jpg'
import WeatherItem from '../components/WeatherItem';

const Weather = () => {
    const [valueSearch, setValueSearch] = useState("")
    const [options, setOptions] = useState([])
    const [displayWeather, setDisplayWeather] = useState({})

    const handleSearchBtn = async (valueSearch) => {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${valueSearch.value}&units=metric&appid=be641094cb1041f70e4170417978ca6c`)
        console.log(response.data)
        setValueSearch(valueSearch)
        setDisplayWeather(response.data)
    }

    useEffect(() => {
        async function fetchData() {
            let responseCity = await axios.get("/data/cities_list.json")
            const cities = []
            responseCity.data.forEach(element => {
                cities.push({ value: element.name, label: `${element.name}, ${element.country}` })
            });
            setOptions(cities)
        }
        fetchData()
    }, [])
    return (
        <div className='vh-100 py-5' style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <Search valueSearch={valueSearch} handleSearchBtn={handleSearchBtn} options={options} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 card shadow-0 border bg-transparent text-light">
                        <WeatherItem displayWeather={displayWeather} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather