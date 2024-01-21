import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickGenerate } from '../../redux/slice/otpSlice'

const GenerateOTP = () => {
    const dispatch = useDispatch()
    const orgOtp = useSelector(state => state.otp.orgOtp)
    const handleClickGenerate = () => {
        dispatch(clickGenerate())
    }
    return (
        <div className='text-center'>
            <button className='btn btn-success' onClick={handleClickGenerate}>Generate OTP</button>
            <div className='text-light'>Your OTP: {orgOtp}</div>
        </div>
    )
}

export default GenerateOTP