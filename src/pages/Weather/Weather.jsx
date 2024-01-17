import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Background from '../../assets/img/bgWeatherApp.jpg'
import CitiesList from '../../assets/data/cities_list.json'
import WeatherItem from './WeatherItem';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';


const Weather = () => {
    const navbarHeight = `${document.querySelector(".navbar")?.getBoundingClientRect().height}px`
    const [valueSearch, setValueSearch] = useState("")
    const [options, setOptions] = useState([])
    const [displayWeather, setDisplayWeather] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()

    const handleSearchBtn = async (valueSearch) => {
        setIsLoading(true)
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${valueSearch.value}&units=metric&appid=be641094cb1041f70e4170417978ca6c`)
        setIsLoading(false)
        setValueSearch(valueSearch)
        setDisplayWeather(response.data)
        navigate("/weather")
    }

    const handleClickDetail = () => {
        if (valueSearch.value) navigate(`/weather/${valueSearch.value}`);
    }

    useEffect(() => {
        const cities = []
        CitiesList.forEach(element => {
            cities.push({ value: element.name, label: `${element.name}, ${element.country}` })
        });
        setOptions(cities)
    }, [])

    return (
        <div className='py-5' style={{ background: `url(${Background}) no-repeat center/cover`, minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='container'>
                <div className='row justify-content-center py-5'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <Select defaultValue={valueSearch}
                            onChange={handleSearchBtn}
                            options={options} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 card shadow-0 border bg-transparent text-light">
                        {isLoading
                            ?
                            <div className='bg-transparent text-white pt-2'>Loading......</div>
                            :
                            <WeatherItem displayWeather={displayWeather} handleClickDetail={handleClickDetail} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather