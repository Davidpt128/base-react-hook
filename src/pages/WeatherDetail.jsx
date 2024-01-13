import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
    let history = useHistory()
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
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x',
                    limits: {
                        x: { max: 2 },
                    },
                },
            }
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
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const handleBack = () => {
        history.goBack()
    }

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&units=metric&appid=be641094cb1041f70e4170417978ca6c`)
            const timelines = []
            const temps = []
            response.data.list.forEach(e => { moment(e.dt_txt).format("HH:mm") === "00:00" ? timelines.push(moment(e.dt_txt).format("MMM DD")) : timelines.push(moment(e.dt_txt).format("HH:mm")) })
            response.data.list.forEach(e => temps.push(e.main.temp))
            setLabels(timelines)
            setTemps(temps)
        }
        fetchData()
    }, [])

    return (
        <div className='container py-5'>
            <button className='btn btn-info' onClick={handleBack}>Back</button>
            <div style={{ width: "1000px" }}>
                <Line
                    options={options}
                    data={data}
                />
            </div>
        </div>
    )
}

export default WeatherDetail