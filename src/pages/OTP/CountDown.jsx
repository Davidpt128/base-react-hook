import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch, useSelector } from 'react-redux'
import { onCompleteCountDown } from '../../redux/slice/otpSlice'

const CountDown = (props) => {
    const { size = 120, duration = 15 } = props
    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.otp.isPlaying)
    const keyCountDown = useSelector(state => state.otp.keyCountDown)
    const onComplete = () => {
        dispatch(onCompleteCountDown())
    }

    return (
        <div className='d-flex justify-content-center'>
            <CountdownCircleTimer
                key={keyCountDown}
                size={size}
                isPlaying={isPlaying}
                duration={duration}
                colors={['#4caf50', '#4caf50', '#fdd835', '#A30000', '#A30000']}
                colorsTime={[duration, duration / 2, duration / 4, 1, 0]}
                onComplete={onComplete}
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