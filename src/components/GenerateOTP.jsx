import React from 'react'

const GenerateOTP = (props) => {
    return (
        <div className='text-center'>
            <button className='btn btn-success' onClick={props.handleClickGenerate}>Generate OTP</button>
            <div className='text-light'>Your OTP: {props.orgOtp}</div>
        </div>
    )
}

export default GenerateOTP