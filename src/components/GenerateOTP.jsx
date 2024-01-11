import React from 'react'

const GenerateOTP = (props) => {
    let handleClickBtn = () => {
        props.setOrgOtp(Math.floor(100000 + Math.random() * 900000))
    }
    return (
        <div className='text-center'>
            <button className='btn btn-success' onClick={handleClickBtn}>Generate OTP</button>
            <div className='text-light'>Your OTP: {props.orgOtp}</div>
        </div>
    )
}

export default GenerateOTP