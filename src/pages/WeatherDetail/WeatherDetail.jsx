import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import moment from 'moment'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
);

const WeatherDetail = () => {
    let navigate = useNavigate()
    const { locationName } = useParams()
    const [labels, setLabels] = useState([])
    const [temps, setTemps] = useState([])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Forecast for next 5 days',
            },
            // zoom: {
            //     zoom: {
            //         wheel: {
            //             enabled: true,
            //         },
            //         pinch: {
            //             enabled: true
            //         },
            //         mode: 'x',
            //         limits: {
            //             x: { max: 2 },
            //         },
            //     },
            // }
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'temperature',
                data: temps,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.4,
            },
        ],
    };

    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&units=metric&appid=be641094cb1041f70e4170417978ca6c`)
            const timelines = []
            const temps = []
            response.data.list.forEach(e => { moment(e.dt_txt).format("h a") === "12 am" ? timelines.push(moment(e.dt_txt).format("MMM DD")) : timelines.push(moment(e.dt_txt).format("h a")) })
            response.data.list.forEach(e => temps.push(e.main.temp))
            setLabels(timelines)
            setTemps(temps)
        }
        fetchData()
    }, [locationName])

    return (
        <div className='container py-5'>
            <button className='btn btn-info' onClick={handleBack}>Back</button>
            <div className='row'>
                <div className='col-12 overflow-y-auto'>
                    <div style={{ minWidth: "1480px" }}>
                        <Line
                            options={options}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail