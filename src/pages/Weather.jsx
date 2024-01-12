import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Search from '../components/Search';
import _ from 'lodash';

const Weather = () => {
    const [valueSearch, setValueSearch] = useState("")
    const [options, setOptions] = useState([])
    const [displayWeather, setDisplayWeather] = useState({})

    const handleSearchBtn = async (valueSearch) => {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${valueSearch.value}&units=metric&appid=be641094cb1041f70e4170417978ca6c`)
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
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <Search valueSearch={valueSearch} handleSearchBtn={handleSearchBtn} options={options} />
                </div>


            </div>
        </div>
    )
}

export default Weather