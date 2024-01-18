import React, { useEffect } from 'react'
import Background from '../../assets/img/bgWeatherApp.jpg'
import WeatherItem from './WeatherItem';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectSearch, fetchListCities } from '../../redux/slice/weatherSlice';


const Weather = () => {
    let navigate = useNavigate()
    const navbarHeight = `${document.querySelector(".navbar")?.getBoundingClientRect().height}px`
    const dispatch = useDispatch()
    const cities = useSelector(state => state.weather.cities)
    const citySelected = useSelector(state => state.weather.citySelected)
    const isLoading = useSelector(state => state.weather.isLoading)
    const isError = useSelector(state => state.weather.isError)

    const handleSearchBtn = (citySelected) => {
        dispatch(changeSelectSearch(citySelected))
        navigate("/weather")
    }

    useEffect(() => {
        dispatch(fetchListCities())
    }, [dispatch])

    return (
        <div className='py-5' style={{ background: `url(${Background}) no-repeat center/cover`, minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='container'>
                <div className='row justify-content-center py-5'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <Select defaultValue={citySelected}
                            onChange={handleSearchBtn}
                            options={cities} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 card shadow-0 border bg-transparent text-light">
                        {isLoading
                            ?
                            <div className='bg-transparent text-white pt-2'>Loading......</div>
                            : <>
                                {isError ?
                                    <div className='bg-transparent text-white pt-2'>Something wrong, please try again......</div>
                                    :
                                    <WeatherItem />
                                }
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather