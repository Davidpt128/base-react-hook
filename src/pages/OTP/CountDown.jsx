import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDown = (props) => {
    let { keyCountDown, isPlaying, handleTimeOut } = props
    return (
        <div className='d-flex justify-content-center'>
            <CountdownCircleTimer
                key={keyCountDown}
                size={120}
                isPlaying={isPlaying}
                duration={20}
                colors={['#4caf50', '#4caf50', '#fdd835', '#A30000', '#A30000']}
                colorsTime={[20, 10, 5, 1, 0]}
                onComplete={() => handleTimeOut()}
            >
                {({ remainingTime }) => {
                    if (remainingTime === 0) {
                        return <div className="timer">Regenerate OTP...</div>;
                    }
                    return <p className='fs-2'>{remainingTime}</p>
                }}
            </CountdownCircleTimer>
        </div>
    )
}

export default CountDown